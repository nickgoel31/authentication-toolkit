import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const DashboardPage = () => {

  const  handleLogoutClick = () => {
    signOut({
      redirectTo: "/"
    })
  }

  return (
    <div>
      <Button onClick={handleLogoutClick}>Log out</Button>
    </div>
  )
}

export default DashboardPage