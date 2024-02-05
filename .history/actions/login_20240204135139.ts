"use server"

import { loginSchema } from "@/schemas"
import { z } from "zod"

export const login = (values: z.infer<typeof loginSchema>) => {
    console.log(values)
}