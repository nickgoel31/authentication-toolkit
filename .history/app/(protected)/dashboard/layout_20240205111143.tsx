import React from 'react'
import Sidebar from '../_components/sidebar'
import Navbar from '../_components/navbar'

const DashboardLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='mx-auto flex flex-col relative pl-72 pt-28'>
        <Sidebar />
        <Navbar />
        {children}
    </div>
  )
}

export default DashboardLayout