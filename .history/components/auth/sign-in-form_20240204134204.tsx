"use client"

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
                    <FormLabel className='ml-1'>Email</FormLabel>
                    <FormControl>
                        <Input type='email' placeholder='johndoe@abc.com' {...field}/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({...field}) => (
                <FormItem>
                    <FormLabel className='ml-1'>Password</FormLabel>
                    <FormControl>
                        <Input type='password' placeholder='*******' {...field}/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
                )}
            />

            <div className='w-full items-center justify-center flex mt-5'>
                <Button type='submit' className=''>Login to your account</Button>
            </div>
        </form>
    </Form>
  )
}

export default SignInForm