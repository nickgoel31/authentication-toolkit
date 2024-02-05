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
import { loginSchema, registerSchema } from '@/schemas'
import { login } from '@/actions/login'

const SignUpForm = () => {

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues:{
            userName:"",
            email:"",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        console.log(values)
    }


  return (
    <Form {...form}>
        <form  onSubmit={form.handleSubmit(onSubmit)}>

            <FormField
                control={form.control}
                name="userName"
                render={({field}) => (
                <FormItem>
                    <FormLabel className='ml-1'>Username</FormLabel>
                    <FormControl>
                        <Input type='text' placeholder='johndoe123' {...field}/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="email"
                render={({field}) => (
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
                render={({field}) => (
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
                <Button type='submit' className=''>Let's dive into auth</Button>
            </div>
        </form>
    </Form>
  )
}

export default SignUpForm