import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import AuthProvider from './AuthProvider/AuthProvider';
import ErrorPage from './errorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login></Login>
      },
      {
          path: '/register',
          element: <Register></Register>
      },
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div  className='max-w-6xl mx-auto '>
  <React.StrictMode>
    <AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>
  </div>
)
