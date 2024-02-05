import React from 'react'
import Sidebar from '../_components/sidebar'
import Navbar from '../_components/navbar'

const DashboardLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='mx-auto flex relative pl-72 pt-10'>
        <Sidebar />
        <Navbar />
        {children}
    </div>
  )
}

export default DashboardLayout