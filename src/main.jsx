import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,redirect } from 'react-router-dom'
import Docs from './Routes/docs/docs'
import componentRender from './pages/componentRender/componentRender.jsx'
import ActionSheet from './FongolaUIcomponent/@actionSheet.jsx'
import Installation from './pages/installation/Installation.jsx'


const route = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/docs",
    element:<Docs/>
  },
  {
    path:"/components",
    element: <Docs componentDefault={"je suis default"}/>
  },
  {
    path:"/docs/components/:component",
    element:<Docs/>
  },
  {
    path:"docs/installation",
    element:<Docs componentDefault={<Installation/>}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
