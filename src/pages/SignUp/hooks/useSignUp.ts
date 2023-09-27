import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { wait } from 'utils/helpers'

import { SignInFormProps, signInSchema } from '../form'

export const useSignUp = () => {
  const [toast, setToast] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
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
    setToast(true)
  })

  const closeToast = () => setToast(false)

  return {
    register,
    errors,
    handleSubmit,
    isSubmitting,
    showPassword,
    handleToggleShowPassword,
    toast,
    closeToast,
  }
}
