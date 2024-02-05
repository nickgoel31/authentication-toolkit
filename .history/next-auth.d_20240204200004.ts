import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
import type UserType from "./user"


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role?: string,
  }
}