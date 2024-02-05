import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'

const HomeLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='h-full flex flex-col items-center justify-center relative'>
        <div className="absolute top-8 right-8">
            <ModeToggle />
          </div>
        {children}
    </div>
  )
}

export default HomeLayout