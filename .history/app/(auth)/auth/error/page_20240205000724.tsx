import Link from 'next/link'
import React from 'react'

const ErrorAuthPage = () => {
  return (
    <div>SOMETHING WENT WRONG, GO BACK TO <Link href={"/sign-in"}>LOGIN</div>
  )
}

export default ErrorAuthPage