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
  signOut
 } = NextAuth({

  callbacks:{

    async signIn({user}){
      const existingUser = await  getUserById(user.id);

      if(!existingUser || !existingUser.emailVerified){
        return false;
      }

      return true;
    }

    async jwt({token}){
      if(!token.sub) return token;

      const existingUser = await getUserById(token.sub)

      if(!existingUser) return token;

      token.role = existingUser.role;
      return token;
    },

    async session({token, session} : {session:Session, token?: JWT}){
      if (token) {
        console.log(token)
        if(session.user){
          session.user.id = token.sub;
        }

        if(token.role && session.user){
          session.user.role = token.role;
        }
      }         
      return session;
    }
  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})