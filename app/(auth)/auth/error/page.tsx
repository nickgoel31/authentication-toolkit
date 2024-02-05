import Link from 'next/link'
import React from 'react'

const ErrorAuthPage = () => {
  return (
    <div>SOMETHING WENT WRONG, GO BACK TO <Link href={"/sign-in"}>LOGIN</Link></div>
  )
}

export default ErrorAuthPage