import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='border-r bg-[var(--background)]  w-60 h-full fixed top-0 left-0 py-10 flex flex-col items-center justify-start '>
        <h1 className='font-semibold text-2xl'>Auth Toolkit</h1>

        <div className=''>
            <Link href={"/dashboard"}>
                Overview
            </Link>
        </div>
    </div>
  )
}

export default Sidebar