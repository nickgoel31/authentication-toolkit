import React from 'react'
import Sidebar from '../_components/sidebar'

const DashboardLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='mx-auto flex relative pl-64 pt-10'>
        <Sidebar />
        {children}
    </div>
  )
}

export default DashboardLayout