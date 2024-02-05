import NextAuth, { Session } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"
import { JWT } from "next-auth/jwt"
import { getUserById } from "./helpers/auth-helper"

const prisma = new PrismaClient()

export const { 
  handlers: {GET, POST}, 
  auth,
  signIn,
  signOut,
 } = NextAuth({

  pages: {
    signIn: "/sign-in",
    error: "/auth/error"
  },


  events:{
    async linkAccount({user}) {
      await db.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()}
      })
    }
  },


  callbacks:{

    async signIn({user, account}){

      if(account?.provider !== "credentials") return true;

      if(user.id){
        const existingUser = await getUserById(user.id);

        if(!existingUser || !existingUser.emailVerified){
          return false;
        }
      }

      return true;
    },

    async jwt({token}){
      if(!token.sub) return token;

      const existingUser = await getUserById(token.sub)

      if(!existingUser) return token;

      token.role = existingUser.role;
      token.userName = existingUser.userName;
      return token;
    },

    async session({token, session} : {session:Session, token?: JWT}){
      if (token) {
        if(session.user){
          session.user.id = token.sub;
        }

        if(token.role && session.user){
          session.user.role = token.role;
        }

        if(token.userName && session.user){
          session.user.userName = token.userName;
        }
      }         
      return session;
    }
  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})