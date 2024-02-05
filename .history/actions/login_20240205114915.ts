"use server"

import { signIn } from "@/auth";
import { generateVerificationToken } from "@/data/tokens";
import { getUserByEmail } from "@/helpers/auth-helper";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginSchema } from "@/schemas"
import { AuthError } from "next-auth";
import { z } from "zod"

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Invalid Fields!"}
    }

    const {email, password} =  validatedFields.data

    try {

        const existingUser = await getUserByEmail(email)

        if(!existingUser?.emailVerified){
            return {success: "Email sent! Please verify before signing in"}
        }

        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })



    } catch (error) {
        if(error instanceof AuthError){
            switch (error.type){
                case "CredentialsSignin":
                    return { error: "Invalid Credentials"}
                default: 
                    return {error: "There was an unexpected error"}
            }
        }

        throw error
    }



    // return {success: "Email Verification sent!"}
}