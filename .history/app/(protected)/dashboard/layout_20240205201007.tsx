import React from 'react'
import Sidebar from '../_components/sidebar'
import Navbar from '../_components/navbar'
import {SessionProvider} from 'next-auth/react'

const DashboardLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <SessionProvider>
      <div className='mx-auto flex flex-col relative pl-72 pt-24'>
          <Sidebar />
          <Navbar />
          {children}
      </div>
    </SessionProvider>
  )
}

export default DashboardLayout