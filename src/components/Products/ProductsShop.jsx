import React from 'react'
import { useState } from 'react'
import { Product } from "../../data/Product.js"
import { div } from 'motion/react-client'
import Products from '../../pages/Products.jsx'
import { useNavigate } from "react-router-dom";


const ProductsShop = () => {

const navigate = useNavigate();
const [activeColors, setActiveColors] = useState({});
  return (
    <section className='py-10 px-16 bg-page'>
     {/* title */}
     <div>
       <h1 className='text-3xl font-semibold text-primary-dark font-heading py-5'>Our Products</h1> 
     </div>

     {/* product list */}
     
       <div className='products-list grid grid-cols-3 gap-10 place-items-center mt-10'>
         {/* maping products */}
         {Product.map((products) => {
            // picking first color index 0
            const FirstColor = products.colors[0]
            const selectedColor = activeColors[products.id] || products.colors[0];

            const handleColorChange = (productId, color) => {
  setActiveColors(prev => ({
    ...prev,
    [productId]: color
  }));
};

            // handle images 
            const images = selectedColor.imageF || selectedColor.BottleImage || selectedColor.CapImage || selectedColor.MugImage || selectedColor.diaryImageClose || selectedColor.PenImage;
          return (
            <div className='rounded-lg  p-1 overflow-hidden' key={products.id}>
              
          <div className=' w-full aspect-[3/4] overflow-hidden  relative group'>
              <img className={`w-full h-full object-cover rounded-md cursor-pointer transition-opacity duration-300 ${selectedColor.diaryImageClose || selectedColor.imageF ? "group-hover:opacity-0" : ""}`} src={selectedColor.imageF || selectedColor.BottleImage || selectedColor.CapImage || selectedColor.MugImage || selectedColor.diaryImageClose || selectedColor.PenImage} alt={products.name} />
            
              {/*another image to show  */}
             {(selectedColor.imageB || selectedColor.diaryImageOpen) && (
                <img className={`absolute inset-0 w-full h-full object-cover rounded-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300`} src={selectedColor.imageB || selectedColor.diaryImageOpen} alt={products.name} />
             )}
           </div>
         
{/* rap the code for spacing */}
<div className='space-y-3'>
            {/* // content  */}
            <div className='space-y-1' >
           <h2 className='text-xl font-heading text-primary-dark font-semibold' >{products.name}</h2>
           <p className='text-lg font-bold text-primary-dark font-body'>₹{products.price}</p>
            </div>

            {/* colors */}
            <div className='flex gap-2 '>
           {products.colors.map((color)=>(
            <div onClick={() => handleColorChange(products.id, color)}  className={`h-5 w-5 rounded-full shadow cursor-pointer border ${
      selectedColor.name === color.name
        ? "border-black scale-110"
        : "border-gray-300"
    }`} key={color.name}
            style={{
                        background:
                          color.name === "silver"
                            ? "linear-gradient(to right, #ccc, #eee)"
                            : color.name,
                      }}
            > 
            </div>
           ))}
            </div>

            <button onClick={() => navigate(`/products/${products.id}`)}
             className=' py-2 bg-primary-dark text-white text-lg w-full rounded-md hover:bg-transparent border hover:border-[#1a1040]  transition-all duration-300 ease-in-out hover:text-primary-dark cursor-pointer font-semibold '>View & Customize Product  </button>
            </div>
            </div>
          )
            
         })}
        </div> 
        
    </section>
  )
}

export default ProductsShop