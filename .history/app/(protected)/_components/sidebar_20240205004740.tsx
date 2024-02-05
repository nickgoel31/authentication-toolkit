import { Home, HomeIcon, LucideHome } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaHouseMedical } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='border-r bg-[var(--background)]  w-60 h-full fixed top-0 left-0 py-10 flex flex-col space-y-8 justify-start px-7'>
        <h1 className='font-semibold text-2xl text-center'>Auth Toolkit</h1>

        <div className=''>
            <Link href={"/dashboard"}>
                <HomeIcon />
                Overview
            </Link>
        </div>
    </div>
  )
}

export default Sidebar