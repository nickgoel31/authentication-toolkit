import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig } from "next-auth"
import { loginSchema } from "./schemas"

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials)

        if(validatedFields.success){
          const {email, password} = validatedFields.data
        }
      }
    })
  ],
} satisfies NextAuthConfig