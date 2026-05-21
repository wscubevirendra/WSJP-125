import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>
    },
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
