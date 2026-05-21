import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import DynamicPage from './pages/DynamicPage'
import Cart from './pages/Cart'

export default function App() {


  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:slug?",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/product/:id",
          element: <DynamicPage />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])



  return (

    <RouterProvider router={routers} />
  )
}
