import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { wait } from 'utils/helpers'

import { recoverPasswordSchema, RecoverPasswordFormProps } from '../form'

export const useRecoverPassword = () => {
  const [toast, setToast] = useState(false)
  const {
    register,
    handleSubmit: submitForm,
    formState: { errors, isSubmitting },
  } = useForm<RecoverPasswordFormProps>({
    resolver: zodResolver(recoverPasswordSchema),
  })

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
    toast,
    closeToast,
  }
}
