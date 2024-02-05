import { AlertTriangle } from 'lucide-react'
import React from 'react'

const ErrorMessage = () => {
  return (
    <div className='w-full p-3 flex items-center bg-destructive/20 text-destructive mt-4 mb-4 rounded-md'>
        <AlertTriangle />
        Email alreayd in use
    </div>
  )
}

export default ErrorMessage