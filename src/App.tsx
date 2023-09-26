import { RouterProvider } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material'
import { routes } from 'Router'

import 'styles/global.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}
