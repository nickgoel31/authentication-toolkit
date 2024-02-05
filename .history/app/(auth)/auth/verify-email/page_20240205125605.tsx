"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import {BeatLoader} from "react-spinners"

const VerifyEmailPage = () => {

    const searchParams = useSearchParams()

    const token = searchParams.get("token");


  return (
    <div className='flex items-center justify-center gap-2 flex-col'>
        <h1>Verifying your email</h1>
        <div className='dark:hidden'>
            <BeatLoader />
        </div>
        <div className='hidden dark:block'>
            <BeatLoader color='white'/>
        </div>
        <Link href={"/sign-in"} className='underline'>Back to login</Link>
    </div>
  )
}

export default VerifyEmailPage