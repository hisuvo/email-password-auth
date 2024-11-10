import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Dashbord from './components/Dashbord/Dashbord';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errorpage/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/dashbord",
        element: <Dashbord/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
