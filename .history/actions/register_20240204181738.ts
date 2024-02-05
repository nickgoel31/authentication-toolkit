"use server"

import { db } from "@/lib/db";
import { registerSchema } from "@/schemas"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail, getUserByUserName } from "@/helpers/auth-helper";

export const register = async (values: z.infer<typeof registerSchema>) => {

    //Revalidate Fields

    const validatedFields = registerSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Email already exists"}
    }

    //hashedPassword
    const hashedPassword = await bcryptjs.hash(validatedFields.data.password, 10);

    const existingUserEmail = await getUserByEmail(validatedFields.data.email)
    const existingUserUserName = await getUserByUserName(validatedFields.data.userName)

    if(existingUserEmail === validatedFields.data.email){
        return {error: "Email already in use"}
    }
    if(existingUserUserName === validatedFields.data.userName){
        return {error: "Username already taken"}
    }
    
    
    //create a user

    await db.user.create({
        data:{
            userName: validatedFields.data.userName,
            email: validatedFields.data.email,
            password:  hashedPassword,
        }
    })

    return { success : "Email Sent Successfully"}

}