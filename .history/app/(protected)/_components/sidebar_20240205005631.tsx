"use client"

import { cn } from '@/lib/utils';
import { Home, HomeIcon, Lock, LucideHome, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { RiHome3Line } from "react-icons/ri";

const sidebarLinks = [
    {
        icon: <RiHome3Line size={18}/>,
        name: "Overview",
        path: "/dashboard"
    },
    {
        icon: <Lock size={18}/>,
        name: "Your Authentication",
        path: "/dashboard"
    },
    {
        icon: <Settings size={18}/>,
        name: "Settings",
        path: "/dashboard"
    },
]


const Sidebar = () => {

    const path = usePathname()


  return (
    <div className='border-r bg-[var(--background)]  w-60 h-full fixed top-0 left-0 py-10 flex flex-col space-y-8 justify-start px-5'>
        <h1 className='font-semibold text-2xl text-center'>Auth Toolkit</h1>

        <div className='flex flex-col gap-2'>
            {sidebarLinks.map((link) => (
                <Link key={link.path} href={link.path} className={cn('flex gap-3 text-sm items-center hover:bg-neutral-100/10 p-3 rounded-lg', )}>
                    {link.icon}
                    {link.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Sidebar