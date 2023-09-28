import { createBrowserRouter } from 'react-router-dom'

import { SignIn, SignUp, RecoverPassword, Home } from 'pages'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  { path: '/recover-password', element: <RecoverPassword /> },
])
