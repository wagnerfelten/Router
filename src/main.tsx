import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './pages/home';
import Contact from './pages/contact';
import Error from './pages/Error';
import ContactDetails from './pages/contactDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      //Nested routes - identificador unico
      {
        path: '/contact/:id',
        element: <ContactDetails />
      },
      //Navigate para páginas nao existente ou que deixaram de existir na aplicação
      {
        path: 'oldContact',
        element: <Navigate to="/contact" />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
