import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from "./pages/Home"
import About from  "./pages/About"
import Event from './pages/Event'
import BrandAndAds from "./pages/BrandAndAds"
import CorporateGifting from './pages/CorporateGifting'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={ <MainLayout />} > 
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/events' element={<Event />} />
      <Route path='/branding&Ad' element={<BrandAndAds />} />
      <Route path='/corporategifting' element={<CorporateGifting />} />
      <Route path='/portfolio' element={<Portfolio />}  />     
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App