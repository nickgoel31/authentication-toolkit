"use server"

import { db } from "@/lib/db";
import { registerSchema } from "@/schemas"
import { z } from "zod"
import bcryptjs from "bcryptjs"

export const register = async (values: z.infer<typeof registerSchema>) => {

    //Revalidate Fields

    const validatedFields = registerSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Email already exists"}
    }

    //hashedPassword
    bcryptjs

    //create a user

    await db.user.create({
        data:{
            userName: validatedFields.data.userName,
            email: validatedFields.data.email,
        }
    })

    return { success : "Email Sent Successfully"}

}