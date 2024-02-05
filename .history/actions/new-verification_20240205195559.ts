"use server"

import { getUserByEmail } from "@/helpers/auth-helper"
import { getVerificationTokenByToken } from "@/helpers/verification-helper"
import { db } from "@/lib/db"

export const newVerification = async (token:string) => {
    const existingToken = await getVerificationTokenByToken(token)

    if(!existingToken){
        return {error: "Token does not exist!"}
    }

    const hasExpired = new Date(existingToken.expiresOn) < new Date();

    if(hasExpired) {
        return {error: "Your Token has expired"}
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if(!existingUser){
        return {error: "Email doesn't exist!"}
    }

    await db.user.update({
        where:{id: existingUser.id},
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: {id:existingToken.id}
    })


}