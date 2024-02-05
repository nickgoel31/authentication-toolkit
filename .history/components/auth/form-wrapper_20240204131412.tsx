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
    <div>
        {children}
    </div>
  )
}

export default FormWrapper