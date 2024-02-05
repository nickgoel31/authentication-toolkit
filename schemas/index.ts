import {z} from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password must not be empty"
    })
})

export const registerSchema = z.object({
    userName:  z.string().min(4,{message: "Username cannot be blank"}),
    email: z.string().email(),
    password: z.string().min(5, {
        message: "Password must contain at least 5 characters"
    }).includes("@",{
        message: "Password should contain @ symbol"
    })
})