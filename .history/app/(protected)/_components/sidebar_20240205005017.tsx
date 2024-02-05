import { Home, HomeIcon, LucideHome } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { RiHome3Line } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className='border-r bg-[var(--background)]  w-60 h-full fixed top-0 left-0 py-10 flex flex-col space-y-8 justify-start px-5'>
        <h1 className='font-semibold text-2xl text-center'>Auth Toolkit</h1>

        <div className=''>
            <Link href={"/dashboard"} className='flex gap-3 text-sm items-center hover:bg-neutral-100/10 p-3 rounded-lg'>
                <RiHome3Line size={18}/>
                Overview
            </Link>
        </div>
    </div>
  )
}

export default Sidebar