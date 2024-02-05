"use client"

import React, { useState, useTransition } from 'react'
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
import { registerSchema } from '@/schemas'
import { register } from '@/actions/register'
import ErrorMessage from './error-message'
import SuccessMessage from './success-message'

const SignUpForm = () => {

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const [isPending, startTransition] = useTransition();


    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues:{
            userName:"",
            email:"",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof registerSchema>) => {

        setError("")
        setSuccess("")

        startTransition(() => {
            register(values)
            .then((data) => {
            setError(data.error);
            setSuccess(data.success);
            })
        })
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
                        <Input disabled={isPending} type='text' placeholder='johndoe123' {...field}/>
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
                        <Input disabled={isPending} type='email' placeholder='johndoe@abc.com' {...field}/>
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
                        <Input disabled={isPending} type='password' placeholder='*******' {...field}/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
                )}
            />

            <ErrorMessage message={error}/>
            <SuccessMessage message={success}/>

            <div className='w-full items-center justify-center flex mt-5'>
                <Button disabled={isPending} type='submit' className=''>Let's dive into authentication</Button>
            </div>
        </form>
    </Form>
  )
}

export default SignUpForm