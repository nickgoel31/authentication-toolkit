import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
import type UserType from "./user"


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    name?: string,
    email?: string,
    picture?: string,
    sub?: string,
    iat?: number,
    exp?: number,
    jti?: string
  }
}