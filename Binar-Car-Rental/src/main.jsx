import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import CariMobil from './pages/CariMobil'
import HasilPencarian from './pages/HasilPencarian'
import Detail from './pages/Detail'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/search",
    element: <CariMobil/>,
  },
  {
    path: "/search-result",
    element: <HasilPencarian/>,
  },
  {
    path: '/car/detail/:id',
    element: <Detail/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
