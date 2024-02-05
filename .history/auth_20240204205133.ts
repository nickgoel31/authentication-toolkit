import NextAuth, { Session } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"
import { JWT } from "next-auth/jwt"

const prisma = new PrismaClient()

export const { 
  handlers: {GET, POST}, 
  auth,
  signIn,
  signOut
 } = NextAuth({

  callbacks:{
    async jwt({token}){
      return token;
    },

    async session({token, session} : {session:Session, token?: JWT}){
      if (token) {
        token.role = "Hello";
        console.log({sessionToken: token})
        if(session.user){
          session.user.id = token.sub;
        }
      }         
      return session;
    }
  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})