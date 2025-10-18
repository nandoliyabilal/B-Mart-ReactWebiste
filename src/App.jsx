import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeeFood from './components/SeeFood/SeeFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'




const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/seefood',
          element: <SeeFood />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        },
      ]
    },

  ])
  return <RouterProvider router={router} />
}

export default App