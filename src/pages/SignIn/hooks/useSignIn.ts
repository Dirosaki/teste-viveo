import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { wait } from 'utils/helpers'

import { SignInFormProps, signInSchema } from '../form'

export const useSignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit: submitForm,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormProps>({
    resolver: zodResolver(signInSchema),
  })

  const handleToggleShowPassword = () => setShowPassword((state) => !state)

  const handleSubmit = submitForm(async () => {
    await wait()
    navigate('/')
  })

  return {
    register,
    errors,
    handleSubmit,
    isSubmitting,
    showPassword,
    handleToggleShowPassword,
  }
}
