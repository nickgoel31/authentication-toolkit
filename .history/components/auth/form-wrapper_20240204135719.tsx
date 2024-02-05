import React from 'react'
import { Button } from '../ui/button';
import { FaGoogle } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

interface FormWrapperProps {
    children:React.ReactNode;
    title?: string | undefined;
    tag?: string | undefined;
    showSocial?: boolean;
    backHref: string; 
    backLabel?: string | undefined;
}

const FormWrapper = ({children, title, tag, backHref, backLabel, showSocial=false} : FormWrapperProps) => {
  return (
    <div className='flex flex-col items-center justify-center text-center p-6 py-7 border w-[450px] rounded-xl'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='text-muted-foreground font-medium'>{tag}</p>
            <div className='mt-2 flex flex-col text-start'>
                {children}
            </div>

            <div className='items-center flex justify-center mt-[-5px]'>
                <Button variant={"link"} className='text-muted-foreground text-sm'><Link href={backHref}>{backLabel}</Link></Button>
            </div>

        </div>
        <div className='w-full'>
            {showSocial && (
                <>
                    <hr  className='mt-3 mb-5'/>
                    <div className='flex items-center justify-center gap-3 w-full'>
                        <Button variant={'outline'} className='w-full'><BsGithub size={18}/></Button>
                        <Button variant={'outline'} className='w-full flex items-center gap-2'>
                            <FaGoogle size={17}/></Button>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default FormWrapper