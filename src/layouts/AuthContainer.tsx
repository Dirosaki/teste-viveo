import { ReactNode } from 'react'

type AuthContainerProps = {
  title: string
  description: string
  children: ReactNode
}

export const AuthContainer = ({
  title,
  description,
  children,
}: AuthContainerProps) => {
  return (
    <main className="flex items-center justify-center h-full px-4 bg-zinc-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow md:p-8">
        <h1 className="text-3xl font-bold text-zinc-700">{title}</h1>
        <p className="mt-2 mb-8 text-zinc-500">{description}</p>
        {children}
      </div>
    </main>
  )
}
