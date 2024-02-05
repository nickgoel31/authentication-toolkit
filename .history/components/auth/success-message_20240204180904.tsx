import { Check, CheckCircle } from 'lucide-react'
import React from 'react'

const SuccessMessage = () => {
  return (
    <div className='w-full p-3 flex items-center bg-emerald-700/20 text-destructive mt-4 gap-3 font-medium mb-4 rounded-md'>
        <CheckCircle />
        Email alreayd in use
    </div>
  )
}

export default SuccessMessage