import { CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full px-4 bg-zinc-100">
      <CircularProgress />
    </div>
  )
}
