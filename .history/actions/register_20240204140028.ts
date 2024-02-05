"use server"

import { registerSchema } from "@/schemas"
import { z } from "zod"

export const register = (values: z.infer<typeof registerSchema>) => {
    console.log(values)
}