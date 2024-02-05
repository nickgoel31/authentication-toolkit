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
  

const UserButton = () => {
    const session = useSession()

    const onClick = () => {
        signOut();
    }

  return (
    <div>

    </div>
  )
}

export default UserButton