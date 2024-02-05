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
import { ChevronUp, User2Icon, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

  

const UserButton = () => {
    const session = useSession()

    const onClick = () => {
        signOut();
    }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='w-full rounded-md overflow-hidden'>
            <div className='flex items-center justify-between gap-3 hover:bg-neutral-500/10 w-full p-1'>
                <div className='flex items-center gap-2'>
                    <Avatar className='w-9 h-9'>
                        <AvatarImage src="https://github.com/shadcn3.png" />
                        <AvatarFallback>
                            <UserIcon size={18}/>
                        </AvatarFallback>
                    </Avatar>

                    <h2 className='text-xs'>{session.data?.user.userName}</h2>
                </div>
                <span className='text-xs'>
                    <ChevronUp size={17}/>
                </span>
            </div>

        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuLabel>{session.data?.user.userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-destructive dark:text-red-500 flex items-center justify-center'>
                <Button variant={"link"} className='text-destructive dark:text-red-500' onClick={onClick}>Sign out</Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserButton