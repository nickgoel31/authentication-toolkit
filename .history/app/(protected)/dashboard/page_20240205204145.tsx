import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { Construction } from 'lucide-react'
import React from 'react'

const DashboardPage = async () => {

  return (
    <div className='h-full flex flex-col items-center justify-center w-full '>
      <Construction />
      <h2>Work in progress</h2>
    </div>
  )
}

export default DashboardPage