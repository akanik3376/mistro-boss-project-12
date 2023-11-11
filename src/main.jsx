import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routs/Routs'
import { HelmetProvider } from 'react-helmet-async';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-5xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
