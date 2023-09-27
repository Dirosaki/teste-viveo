import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import { routes } from 'Router'

import 'styles/global.css'
import { theme } from 'styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}
