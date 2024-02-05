import { signOut } from '@/auth'
import React from 'react'

const DashboardPage = () => {

  signOut({
    redirectTo: "/"
  })

  return (
    <div>
      
    </div>
  )
}

export default DashboardPage