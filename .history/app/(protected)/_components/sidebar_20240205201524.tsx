"use client"

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home, HomeIcon, Lock, LucideHome, Settings } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { RiHome3Line } from "react-icons/ri";
import UserButton from './user-button';

const sidebarLinks = [
    {
        icon: <RiHome3Line size={18}/>,
        name: "Overview",
        path: "/dashboard"
    },
    {
        icon: <Lock size={18}/>,
        name: "Your Authentication",
        path: "/dashboard/auth-app"
    },
    {
        icon: <Settings size={18}/>,
        name: "Settings",
        path: "/dashboard/settings"
    },
]


const Sidebar = () => {

    const path = usePathname()

    

  return (
    <div className='border-r bg-background z-[12] w-60 h-full fixed top-0 left-0 py-10 flex flex-col space-y-8 justify-between px-5'>
        <div className='flex flex-col space-y-8'>
            <h1 className='font-semibold text-2xl text-center'>Auth Toolkit</h1>

            <div className='flex flex-col gap-2'>
                {sidebarLinks.map((link) => (
                    <Link key={link.path} href={link.path} className={cn('flex gap-3 text-sm items-center hover:bg-neutral-100/10 p-3 rounded-lg', path === link.path ? "bg-neutral-100/10" : "")}>
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>

        <div className=''>
            <UserButton />
            <Button onClick={onClick}>Sign out</Button>
        </div>
    </div>
  )
}

export default Sidebar