import { createBrowserRouter } from 'react-router-dom'

import { SignIn, SignUp, RecoverPassword } from 'pages'

export const routes = createBrowserRouter([
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
