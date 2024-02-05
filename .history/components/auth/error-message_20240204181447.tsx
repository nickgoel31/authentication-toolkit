import { AlertTriangle } from 'lucide-react'
import React from 'react'

const ErrorMessage = ({message} : {message?: string}) => {

    if(!message) return null;

  return (
    <div className='w-full p-3 flex items-center bg-destructive/20 text-destructive mt-4 gap-3 font-medium mb-4 rounded-md'>
        <AlertTriangle />
        {message}
    </div>
  )
}

export default ErrorMessage