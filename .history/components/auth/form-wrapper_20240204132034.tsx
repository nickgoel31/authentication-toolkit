import React from 'react'

interface FormWrapperProps {
    children:React.ReactNode;
    title: string | undefined;
    tag: string | undefined;
    showSocial?: boolean;
    backHref: string | undefined; 
    backLabel: string | undefined;
}

const FormWrapper = ({children, title, tag, backHref, backLabel, showSocial=false} : FormWrapperProps) => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
        <h2>{title}</h2>
        <p>{tag}</p>
        {children}

        <div className=''>
            {showSocial && (
                <div></div>
            )}
        </div>
    </div>
  )
}

export default FormWrapper