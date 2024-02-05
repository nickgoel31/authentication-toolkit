"use server"

import { db } from "@/lib/db";
import { registerSchema } from "@/schemas"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail, getUserByUserName } from "@/helpers/auth-helper";
import { generateVerificationToken } from "@/data/tokens";
import { Resend } from 'resend';
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof registerSchema>) => {

    //Revalidate Fields

    const validatedFields = registerSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Something Went Wrong"}
    }

    const {email, password, userName} = validatedFields.data

    const existingUserEmail = await getUserByEmail(validatedFields.data.email)
    const existingUserUserName = await getUserByUserName(validatedFields.data.userName)

    if(existingUserEmail?.email === email){
        return {error: "Email already in use"}
    }
    if(existingUserUserName?.userName === userName){
        return {error: "Username already taken"}
    }
    
    
    //create a user

    //hashedPassword
    const hashedPassword = await bcryptjs.hash(password, 10);

    await db.user.create({
        data:{
            userName: userName,
            email: email,
            password:  hashedPassword,
        }
    })

    //TODO: SEND VERIFICATION EMAILS TO THE USER
    const verificationToken = await generateVerificationToken(email)
    await sendVerificationEmail(verificationToken.email, verificationToken.token)
    

    return { success : "Email Verification sent!"}

}