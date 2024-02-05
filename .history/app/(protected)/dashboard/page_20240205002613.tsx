import { logOut } from '@/actions/sign-out'
import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const DashboardPage = async () => {

  const session = await auth()

  return (
    <div>
      <form action={}>
        <Button onClick={() => logOut()} type='submit'>Log out</Button>
      </form>
    </div>
  )
}

export default DashboardPage