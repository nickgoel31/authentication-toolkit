import { signOut, useSession } from 'next-auth/react';
import React from 'react'

const UserButton = () => {
    const session = useSession()

    const onClick = () => {
        signOut();
    }

  return (
    <div>UserButton</div>
  )
}

export default UserButton