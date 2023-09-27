import { createBrowserRouter } from 'react-router-dom'

import { SignIn, RecoverPassword } from 'pages'

export const routes = createBrowserRouter([
  {
    path: '/signin',
    element: <SignIn />,
  },
  { path: '/recover-password', element: <RecoverPassword /> },
])
