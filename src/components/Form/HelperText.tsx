import { ComponentProps } from 'react'

type HelperTextProps = ComponentProps<'span'>
export const HelperText = ({ ...props }: HelperTextProps) => {
  if (!props.children) return null

  return <span className="mt-1 text-sm text-red-500 " {...props} />
}
