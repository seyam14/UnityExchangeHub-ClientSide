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
import AddJobs from './Pages/AddJobs/AddJobs';
import MyPostedJobs from './Pages/MyPostedJobs/MyPostedJobs.JSX';
import JobDetalisPage from './Pages/JobDetalisPage/JobDetalisPage';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import UpdateJobs from './Pages/UpdateJobs/UpdateJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader : () => fetch('http://localhost:5000/addJobs'),
        },
        {
          path: '/login',
          element: <Login></Login>
      },
      {
          path: '/register',
          element: <Register></Register>
      },
      {
        path: '/addJobs',
        element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute> 
    },
    {
      path: '/jobDetails/:id',
      element: <PrivateRoute><JobDetalisPage></JobDetalisPage></PrivateRoute> ,
      loader: ({ params }) => fetch(`http://localhost:5000/addJobs/${params.id}`)
   },
    {
      path: '/mypostedjobs',
      element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
  },
  {
    path: '/updateJobs/:id',
    element: <UpdateJobs></UpdateJobs> ,
    loader: ({ params }) => fetch(`http://localhost:5000/addJobs/${params.id}`)
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
