import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={ <MainLayout />} > 
      <Route path='/' element={<Home />}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App