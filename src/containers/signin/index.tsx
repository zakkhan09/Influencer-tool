import { useState } from 'react'
import SigninForm from './signin-form'
import EmailSent from './email-sent'
import api from 'common/api'

const Signin = () => {
  const [isSubmitted, setSubmitted] = useState(false)

  const handleSubmit = async (email: string) => {
    await api.sendSigninLink(email)
    setSubmitted(true)
  }

  return isSubmitted ? <EmailSent /> : <SigninForm onSubmit={handleSubmit} />
}

export default Signin
