"use client"

import { logOut } from '@/actions/sign-out'
import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const DashboardPage = async () => {

  const session = await auth()

  return (
    <div>
        <Button onClick={() => logOut()} type='submit'>Log out</Button>
    </div>
  )
}

export default DashboardPage