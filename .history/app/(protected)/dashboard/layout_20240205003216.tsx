import React from 'react'
import Sidebar from '../_components/sidebar'

const DashboardLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='mx-auto flex '>
        <Sidebar />
        {children}
    </div>
  )
}

export default DashboardLayout