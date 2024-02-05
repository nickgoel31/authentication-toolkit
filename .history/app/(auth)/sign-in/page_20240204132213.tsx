import FormWrapper from '@/components/auth/form-wrapper'
import SignInForm from '@/components/auth/sign-in-form'
import React from 'react'

const SignInPage = () => {
  return (
    <FormWrapper
    title='Sign in'
    tag='Welcome back! hope you have a wonderful day.'
    backHref='/sign-up'
    backLabel="Don't have an account?"
    showSocial
    >
      <SignInForm />
    </FormWrapper>
  )
}

export default SignInPage