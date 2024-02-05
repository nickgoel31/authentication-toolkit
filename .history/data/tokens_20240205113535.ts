import { getVerificationTokenByEmail } from "@/helpers/verification-helper";
import { db } from "@/lib/db";
import {uuid} from "uuidv4"


export const generateVerificationToken = async (email: string) => {

    // Generate a verification token that expires after 24 hours.

    const token = uuid();
    const expiresOn = new Date(new Date().getTime() +  1000 * 60 * 60 * 24);
    const existingToken = await getVerificationTokenByEmail(email)

    if(existingToken){
        await db.verificationToken.delete({
            where:{
                id: existingToken.id
            }
        })
    }

    await db.verificationToken.create({
        data:{
            email,
            token,
            expiresOn,
        }
    })

    //TODO: SEND EMAIL USING RESEND

}