import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const DashboardPage = async () => {

  const session = await auth()

  return (
    <div className='h-full'>
      DashboardPage
    </div>
  )
}

export default DashboardPage