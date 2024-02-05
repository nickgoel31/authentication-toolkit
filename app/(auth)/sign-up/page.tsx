import FormWrapper from '@/components/auth/form-wrapper'
import SignUpForm from '@/components/auth/sign-up-form'
import React from 'react'

const SignUpPage = () => {
  return (
    <FormWrapper
    title='Sign up'
    tag="Create a new account. It's free and only takes a minute."
    backLabel='Already have an account?'
    backHref='/sign-in'
    showSocial
    >
      <SignUpForm />
    </FormWrapper>
  )
}

export default SignUpPage