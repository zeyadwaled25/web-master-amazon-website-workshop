import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import NavBar from './Components/NavBar/NavBar'


let routers = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:"/home" , element:<Home/>},
      {index:"/nav" , element:<NavBar/>}



    ]}
  ])

function App() {
  

  return (
    <>
     <RouterProvider router = {routers}></RouterProvider>
    </>
  )
}

export default App
