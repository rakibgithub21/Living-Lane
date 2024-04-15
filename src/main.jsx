import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Layout/Route.jsx'
import AuthContextComponent from './components/AuthContextComponent.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextComponent>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </HelmetProvider>
    </AuthContextComponent>
  </React.StrictMode>,
)
