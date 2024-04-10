import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Layout/Route.jsx'
import AuthContextComponent from './components/AuthContextComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextComponent>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextComponent>
  </React.StrictMode>,
)
