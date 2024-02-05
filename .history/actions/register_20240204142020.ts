"use server"

import { registerSchema } from "@/schemas"
import { z } from "zod"

export const register = async (values: z.infer<typeof registerSchema>) => {

    //Revalidate Fields

    const validatedFields = registerSchema.safeParse(values);

    console.log(validatedFields)

}