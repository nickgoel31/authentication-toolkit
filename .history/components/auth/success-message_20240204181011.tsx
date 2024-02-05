import { Check, CheckCircle } from 'lucide-react'
import React from 'react'

const SuccessMessage = ({message} : {message : string}) => {

  if(!message) return null;

  return (
    <div className='w-full p-3 flex items-center bg-emerald-600/20 text-emerald-600 mt-4 gap-3 font-medium mb-4 rounded-md'>
        <CheckCircle />
        {message}
    </div>
  )
}

export default SuccessMessage