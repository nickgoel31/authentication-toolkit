import { db } from "@/lib/db";


export const generateVerificationToken = async (email: string) => {

    // Generate a verification token that expires after 24 hours.

    const token = "gdfhgrjgr"
    const expiresOn = new Date()


    await db.verificationToken.create({
        data:{
            email,
            token,
            expiresOn,
        }
    })

}