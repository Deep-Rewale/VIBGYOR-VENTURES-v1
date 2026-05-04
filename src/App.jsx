import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from "./pages/Home"
import About from  "./pages/About"
import Event from './pages/Event'
import BrandAndAds from "./pages/BrandAndAds"
import CorporateGifting from './pages/CorporateGifting'
import Portfolio from './pages/Portfolio'
import Contact from "./pages/Contact"
import Login from './components/LoginAndSignUp/Login'
import SignUp from './components/LoginAndSignUp/SignUp'
import Products from './pages/Products'
import ProductDetails from './components/Products/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route element={ <MainLayout />} > 
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/events' element={<Event />} />
      <Route path='/branding&Ad' element={<BrandAndAds />} />
      <Route path='/corporategifting' element={<CorporateGifting />} />
      <Route path='/portfolio' element={<Portfolio />}  /> 
      <Route path='/contact' element={<Contact />}    />
      <Route path='/products' element={<Products />} />
       <Route path='/products/:id' element={<ProductDetails />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App