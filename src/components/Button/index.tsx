import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material'

type ButtonProps = {
  isLoading?: boolean
} & Omit<MUIButtonProps, ''>

export const Button = ({
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <MUIButton
      className="h-11 disabled:cursor-not-allowed"
      disabled={isLoading}
      disableElevation
      size="large"
      type="submit"
      variant="contained"
      {...props}
    >
      {children}
    </MUIButton>
  )
}
