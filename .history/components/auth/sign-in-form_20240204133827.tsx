"use cliend"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginSchema } from '@/schemas'

const SignInForm = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:"",
            password: ""
        }
    })


  return (
    <Form {...form}>
        <form action="">
        <FormField
            control={form.control}
            name="email"
            render={({...field}) => (
            <FormItem>
                <FormLabel />
                <FormControl>
                    <Input />
                </FormControl>
                <FormDescription />
                <FormMessage />
            </FormItem>
            )}
        />
        </form>
    </Form>
  )
}

export default SignInForm