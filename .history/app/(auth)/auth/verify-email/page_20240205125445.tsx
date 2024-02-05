import { useSearchParams } from 'next/navigation'
import React from 'react'
import {BeatLoader} from "react-spinners"

const VerifyEmailPage = () => {

    const searchParams = useSearchParams()

    const token = searchParams.get("token");


  return (
    <div>
        <h1>Verifying your email</h1>
        <div className='dark:hidden'>
            <BeatLoader />
        </div>
        <div className='hidden dark:block'>
            <BeatLoader color='white'/>
        </div>
    </div>
  )
}

export default VerifyEmailPage