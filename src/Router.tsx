import { createBrowserRouter } from 'react-router-dom'

import { SignIn } from 'pages'

export const routes = createBrowserRouter([
  { path: '/signin', element: <SignIn /> },
])
