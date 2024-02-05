import NextAuth, { type DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
import type UserType from "./user"

declare module "@auth/core" {
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {
    user: {
      role: string
    } & DefaultSession["user"]
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role?: string;
  }
}