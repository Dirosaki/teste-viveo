import { forwardRef } from 'react'

import { OutlinedInput, InputLabel, OutlinedInputProps } from '@mui/material'

type TextFieldProps = {
  label: string
} & Omit<OutlinedInputProps, 'label'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, ...props }, ref) => {
    return (
      <>
        <InputLabel size="small">{label}</InputLabel>
        <OutlinedInput ref={ref} label={label} size="small" {...props} />
      </>
    )
  }
)
