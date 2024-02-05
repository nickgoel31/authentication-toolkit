"use server"

import { signIn } from "@/auth";
import { loginSchema } from "@/schemas"
import { z } from "zod"

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Invalid Fields!"}
    }

    const {email, password} =  validatedFields.data

    try {
        await signIn("credentials", {
            email,
            password
        })
    } catch (e) {
        
    }
}