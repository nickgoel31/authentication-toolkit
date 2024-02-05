import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig } from "next-auth"
import { loginSchema } from "./schemas"
import { getUserByEmail } from "./helpers/auth-helper"
import bcryptjs from "bcryptjs"

export default {

  

  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials)

        if(validatedFields.success){
          const {email, password} = validatedFields.data

          const user = await getUserByEmail(email);

          if(!user || !user.password) return null;

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          )

          if(passwordsMatch) return user;
        }

        return null;
      }
    })
  ],
} satisfies NextAuthConfig