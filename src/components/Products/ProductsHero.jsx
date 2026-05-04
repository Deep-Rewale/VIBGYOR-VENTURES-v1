import React from 'react'
import ProductHero from "../../assets/Products/Hero/ProductHero.jpg"
const ProductsHero = () => {
  return (
     <div className="product bg-page relative rounded-b-2xl overflow-hidden">
            <div className="title absolute text-white z-10 text-5xl lg:text-7xl font-semibold font-heading top-40 left-20 uppercase">
                <h1>Customized  <br />products</h1>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/45"></div>
            <img className='h-80 lg:h-100 w-full object-cover ' loading='lazy' src={ProductHero} alt="hero banner" />
        </div>
  )
}

export default ProductsHero