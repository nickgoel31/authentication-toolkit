import * as z from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password must not be empty"
    })
})