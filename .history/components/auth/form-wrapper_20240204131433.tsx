import React from 'react'

interface FormWrapperProps {
    children:React.ReactNode;
    title: string | undefined;
    tag: string | undefined;
    showSocial: boolean;
    backHref: string | undefined; 
    backLabel: string | undefined;
}

const FormWrapper = ({children, title, tag, backHref, backLabel, showSocial=false} : FormWrapperProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        {children}
    </div>
  )
}

export default FormWrapper