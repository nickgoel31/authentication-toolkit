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
}