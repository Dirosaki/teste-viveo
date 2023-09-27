import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const wait = (delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
