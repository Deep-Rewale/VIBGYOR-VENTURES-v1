import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from "./pages/Home"
import About from  "./pages/About"
import Event from './pages/Event'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={ <MainLayout />} > 
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/events' element={<Event />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App