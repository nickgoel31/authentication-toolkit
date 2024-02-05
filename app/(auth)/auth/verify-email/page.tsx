"use client"


import { newVerification } from '@/actions/new-verification'
import ErrorMessage from '@/components/auth/error-message'
import SuccessMessage from '@/components/auth/success-message'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import {BeatLoader} from "react-spinners"

const VerifyEmailPage = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

    const searchParams = useSearchParams()

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
      if(!token){
        setError("Missing Token!")
        return;
      }
      newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!")
      })
    },[])

    useEffect(() => {
      onSubmit()
    },[onSubmit])


  return (
    <div className='flex items-center justify-center gap-2 flex-col'>
        <h1>Verifying your email</h1>

        {!success && !error && (
          <>
          <div className='dark:hidden'>
            <BeatLoader />
        </div>
        <div className='hidden dark:block'>
            <BeatLoader color='white'/>
        </div></>
        )}
        
        <SuccessMessage message={success}/>
        <ErrorMessage message={error}/>
        <Link href={"/sign-in"} className='underline'>Back to login</Link>
    </div>
  )
}

export default VerifyEmailPage