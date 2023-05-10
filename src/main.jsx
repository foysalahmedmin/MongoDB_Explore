import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main.jsx';
import Users from './components/pages/Users';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Users />,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/addUser',
        element: <AddUser />
      },
      {
        path: '/editUser/:id',
        element: <EditUser />,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
