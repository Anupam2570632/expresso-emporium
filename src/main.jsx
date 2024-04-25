import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import CoffeeDetails from './components/CoffeeDetails';
import UpdateCoffee from './components/UpdateCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addCoffee',
        element: <AddCoffee />
      },
      {
        path:'/coffeeDetails/:id',
        element: <CoffeeDetails/>,
        loader:({params})=>fetch(`https://coffee-stroe-server.vercel.app/coffees/${params.id}`)
      },
      {
        path:'/updateCoffee/:id',
        element: <UpdateCoffee/>,
        loader:({params})=>fetch(`https://coffee-stroe-server.vercel.app/coffees/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
