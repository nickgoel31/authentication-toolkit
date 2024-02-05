import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {

    const user = await db.user.findFirst({
        where:{
            email
        }
    })

    return user;

}

export const getUserByUserName = async (userName: string) => {

    const user = await db.user.findUnique({
        where:{
            userName
        }
    })

    return user;

}

export const getUserById = async (id: string) => {

    const user = await db.user.findUnique({
        where:{
            id
        }
    })

    return user;

}