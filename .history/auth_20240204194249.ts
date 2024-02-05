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
      console.log({token});
      return token;
    },

    async session({token, session} : {session:Session, token?: JWT}){
      return session;
    }
  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})