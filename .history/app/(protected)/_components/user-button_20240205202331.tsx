import { signOut, useSession } from 'next-auth/react';
import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User2Icon, UserIcon } from 'lucide-react';

  

const UserButton = () => {
    const session = useSession()

    const onClick = () => {
        signOut();
    }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div className='flex items-center gap-3 bg-neutral-500 w-full'>
                <Avatar className='w-9 h-9'>
                    <AvatarImage src="https://github.com/shadcn3.png" />
                    <AvatarFallback>
                        <UserIcon size={18}/>
                    </AvatarFallback>
                </Avatar>

                <h2 className='text-xs'>{session.data?.user.userName}</h2>
            </div>

        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserButton