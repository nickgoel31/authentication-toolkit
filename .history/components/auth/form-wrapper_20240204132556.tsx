import React from 'react'
import { Button } from '../ui/button';
import { FaGoogle } from 'react-icons/fa6';

interface FormWrapperProps {
    children:React.ReactNode;
    title?: string | undefined;
    tag?: string | undefined;
    showSocial?: boolean;
    backHref?: string | undefined; 
    backLabel?: string | undefined;
}

const FormWrapper = ({children, title, tag, backHref, backLabel, showSocial=false} : FormWrapperProps) => {
  return (
    <div className='flex flex-col items-center justify-center text-center p-5 border w-[450px] rounded-xl'>
        <h2>{title}</h2>
        <p>{tag}</p>
        {children}

        <div className='w-full'>
            {showSocial && (
                <>
                    <hr  className='mt-5 mb-5'/>
                    <div className='flex items-center justify-center gap-3 w-full'>
                        <Button variant={'outline'} className='w-full'></Button>
                        <Button variant={'outline'} className='w-full flex items-center gap-2'><FaGoogle /> Sign in with Google</Button>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default FormWrapper