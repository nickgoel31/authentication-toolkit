import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { Construction } from 'lucide-react'
import React from 'react'

const DashboardPage = async () => {

  return (
    <div className='h-full flex flex-col items-center justify-center w-full gap-2 text-neutral-800'>
      <Construction size={80}/>
      <h2 className='font-semibold text-3xl'>Work in progress</h2>
    </div>
  )
}

export default DashboardPage