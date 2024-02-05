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
import { loginSchema } from '@/schemas'
import { login } from '@/actions/login'
import ErrorMessage from './error-message'
import SuccessMessage from './success-message'
import { loginOAuth } from '@/actions/login-oauth'
import { useSearchParams } from 'next/navigation'

const SignInForm = () => {

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const [isPending, startTransition] = useTransition();

    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider" : ""

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:"",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        setError("")
        setSuccess("")

        login(values)
        .then((data) => {
            setError(data?.error);
            setSuccess(data?.success);
        })
    }

  return (
    <Form {...form}>
        <form  onSubmit={form.handleSubmit(onSubmit)}>
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

            <ErrorMessage message={error || urlError}/>
            <SuccessMessage message={success}/>

            <div className='w-full items-center justify-center flex mt-5'>
                <Button type='submit' className=''>Login to your account</Button>
            </div>
        </form>
    </Form>
  )
}

export default SignInForm