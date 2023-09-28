import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routes } from 'Router'

import { theme } from 'styles/theme'

import 'styles/global.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<h1>Carregando</h1>}>
          <RouterProvider router={routes} />
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
