import React from 'react'
import Sidebar from '../_components/sidebar'
import Navbar from '../_components/navbar'
import {SessionProvider} from 'next-auth/react'
import { auth } from '@/auth'

const DashboardLayout = async ({children} : {children:React.ReactNode}) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className='mx-auto flex flex-col relative pl-72 pt-24 h-screen'>
          <Sidebar />
          <Navbar />
          {children}
      </div>
    </SessionProvider>
  )
}

export default DashboardLayout