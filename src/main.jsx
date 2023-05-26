import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProviders from './component/AuthProviders/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
 <AuthProviders>
 <RouterProvider router={router} />
 </AuthProviders>
 
  </React.StrictMode>,
)
