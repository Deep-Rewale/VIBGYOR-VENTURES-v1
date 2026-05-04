import React, { use } from 'react'
import { motion } from "framer-motion";
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Product } from '../../data/Product'
import { SiNuke } from 'react-icons/si'
import { BsUpload } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosColorFill } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const ProductDetails = () => {
     const { id } = useParams();
    const Products  = Product.find(i => i.id === Number(id))
     const defaultColor = Products.colors[0];
     const [selectedColor,setselectedColor] = useState(defaultColor)
     const [view,setView] = useState("front")
     const images = selectedColor.imageF || selectedColor.BottleImage || selectedColor.CapImage || selectedColor.MugImage || selectedColor.diaryImageClose || selectedColor.PenImage;
     
    //  For Customization
    const [mode,setMode] = useState("text");  // logo
    const [customText,setCustomText] = useState("");
    const [logo,setLogo] = useState(null)
    const fileRef = useRef();
     const colorRef = useRef();
    const [fontSize,setFontSize] = useState(20)
    const [textColor,setTextColor] = useState("#000000")
    const [textRotate,setTextRotate] = useState(0)
    const [fontFamily,setFontFamily] = useState("Arial")


    // logo or image customiation
    const [logoSize,setLogoSize] = useState(100)
    const [logoRotate,setLogoRotate] = useState(0)
    const [quantiy,setQuantity]  = useState(1)
  return (
    <section className='min-h-screen flex items-center justify-center bg-page py-20 px-16'>
      {/* full main content */}
      <div className='grid grid-cols-2 gap-10 pt-20'>
        {/* left image */}
        <div className='relative h-full w-full flex justify-center overflow-hidden  gap-3'>
          {view === "front" && mode === "text" && customText &&  (
          <motion.p  drag dragConstraints="parent" style={{
    fontFamily,
    fontSize:`${fontSize}px`,
    color: textColor,
    rotate: textRotate,
  }} className=' font-bold absolute top-1/2 cursor-move left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'>{customText}</motion.p>
          )}
          {view === "front" && mode === "logo" && logo && (
  <motion.img 
    src={logo}
    drag
    className="absolute top-1/2 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2 cursor-move "
    dragConstraints="parent"
    style={{
      rotate: logoRotate,
      width:`${logoSize}px`
    }}
  />
)}
           {view === "front" ? <img className='h-150 w-110 bg-white rounded-xl shadow-xl p-3' src={images} alt={defaultColor.name} /> :    <img className='h-150 w-110 bg-white rounded-xl shadow-xl p-3' src={selectedColor.imageB || selectedColor.diaryImageOpen} alt={defaultColor.name} />}
            
        </div>

        {/* right info */}

    <div className='space-y-2'>
      <h1 className='text-2xl font-semibold text-primary-dark font-heading'>{Products.name}</h1>  
      <p className='text-xl font-bold text-primary-dark font-body'>₹{Products.price}</p>

      {/* toogle button for text or image logo */}
      <div className='flex flex-col space-y-2 border-t pt-4 w-75 border-gray-400'>
        <h1 className='text-lg font-bold text-primary-dark font-heading'>Customization</h1>
        <div className=' flex gap-3'>
        <button onClick={()=> {setMode("text"); setLogo(null)}} className={`px-4 py-2  text-md font-semibold font-heading capitalize cursor-pointer rounded-lg shadow-md hover:scale-105 transition ${mode === "text" ? "bg-primary-dark text-white": "bg-gray-300 text-primary-dark"}`}>
         text
        </button>
        <button onClick={()=> {setMode("logo") ; setCustomText("")}} className={`px-4 py-2 text-md font-semibold font-heading capitalize cursor-pointer rounded-lg shadow-md hover:scale-105 transition ${mode === "logo" ? "bg-primary-dark text-white": "bg-gray-300 text-primary-dark"}`}>
         upload image
        </button>
        </div>
      </div>
      {/* set inputs according to the contions */}
      {mode === "text" ? (
      <div className='flex gap-5 flex-col '>
        <input type='text' placeholder='Type your text' maxLength={15} value={customText} onChange={(e)=> setCustomText(e.target.value)} className='p-2 w-[210px] border border-gray-400 text-md shadow mt-1 text-primary-dark rounded outline-none ' />
        <div className='flex flex-col relative border-t pt-4 w-75 border-gray-400'>
          <h1 className='text-lg font-bold text-primary-dark font-heading'>Style</h1>
          {/* text color and font family */}
          <div className='flex gap-7 '>
            <div className='flex-col space-y-3'>
          <label className='text-md font-heading font-semibold text-primary-dark ' >Text color</label>
        <div className='flex gap-2  relative'>
          <p className='cursor-pointer'  onClick={()=> colorRef.current.click()}><IoIosColorFill  size={27} /></p>
          <input type='color' className='absolute inset-0 opacity-0 cursor-pointer ' ref={colorRef} value={textColor} onChange={(e)=> setTextColor(e.target.value)} />
          <div className="h-6 w-6 rounded-full" style={{ backgroundColor: textColor }}></div>
          </div>
        </div>
           {mode === "text" && (
          <div className='flex gap-3'>
            <div className='flex-col space-y-1'>
            <h1 className='text-md font-heading font-semibold text-primary-dark '>Font</h1>
           <select className='p-1 bg-primary-dark rounded shadow text-white border outline-none text-sm  ' value={fontFamily} onChange={(e)=> setFontFamily(e.target.value)}>
            <option >Arial</option>
            <option>Georgia</option>
            <option>Verdana</option>
            <option>Helvetica</option>
            <option>Times New Roman</option>
            <option>Tahoma</option>
            <option>Trebuchet MS</option>
            <option>Courier New</option>
            <option>Lucida Sans</option>
              <option>Impact</option>
                <option>Palatino</option>
                  <option>Comic Sans MS</option>
            </select> 
          
         </div>
          </div>
         )}
          </div>

           {/*font size and rotate  */}
         <div>
          
          <h1 className='text-md font-heading font-semibold text-primary-dark'>Font size</h1>
          <div className='flex gap-2'>
            <input type="range" min="12"  max="50" value={fontSize} onChange={(e)=> setFontSize(Number(e.target.value))} />
            <div className='p-1 shadow bg-primary-dark font-semibold text-md text-white rounded-md'>{fontSize}</div> 
             </div>
            {/* rotate input */}
              <div>
                   {mode === "text" && (
 <div className='flex flex-col'>
            <label className='text-md font-heading font-semibold text-primary-dark'>Rotate text</label>
            <div className='flex gap-2'>
            <input  type="range" value={textRotate} min={"-180"} max={"180"}  onChange={(e)=> setTextRotate(Number(e.target.value))} />
            <div className='bg-primary-dark text-white shadow rounded-md p-1 font-semibold'>{textRotate}</div>
            </div>
          </div>
          )}
              </div>
          </div>  
        </div>
      </div>
      ) : (
        <div >
          {/* input hidden */}
        <input className='hidden' ref={fileRef} type="file" accept='image/*' onChange={(e)=> { const file = e.target.files[0]; 
          if(file){
            setLogo(URL.createObjectURL(file))
          }
          }} />
          {/* custom upload box */}
           <div className='border-2 mt-3 flex-col border-dashed w-80 h-50 flex shadow justify-center items-center text-lg font-semibold relative text-primary-dark cursor-pointer border-gray-400 rounded-xl hover:text-gray-400' onClick={()=> fileRef.current.click()}>
            <BsUpload size={25}/>
             {logo ? <> <img src={logo} className=' w-80 h-50 rounded-2xl object-cover shadow' /> <div onClick={()=> setLogo(null)} className='absolute p-1 bg-page  right-0 top-0 rounded-full'><IoCloseOutline size={25} /></div> </>: "Click to upload logo"}
           </div>
          
          </div>
      )} 

     
       

        

          {/* logo rotate button */}

             {mode === "logo" && (
 <div className='flex gap-3 items-center'>
            <label className='text-md font-semibold text-primary-dark'>Rotate image :</label>
            <input  type="range" value={logoRotate} min={"-180"} max={"180"}  onChange={(e)=> setLogoRotate(Number(e.target.value))} />
            <div className='bg-primary-dark text-white shadow rounded-md p-2 font-semibold'>{logoRotate}</div>
          </div>
          )}

             {/* logo size button */}

             {mode === "logo" && (
 <div className='flex gap-3 items-center'>
            <label className='text-md font-semibold text-primary-dark'>image size :</label>
            <input  type="range" value={logoSize} min={"50"} max={"140"}  onChange={(e)=> setLogoSize(Number(e.target.value))} />
            <div className='bg-primary-dark text-white shadow rounded-md p-2 font-semibold'>{logoSize}</div>
          </div>
          )}
         

        
           
          <h1 className='text-lg font-bold text-primary-dark font-heading border-t w-75 pt-4 border-gray-400'>Product</h1>

         {/* front and back photo */}
         {(selectedColor.imageB || selectedColor.diaryImageOpen) && (
          
           <div className='flex gap-3'>
          <button onClick={()=> setView("front")} className={`px-4 py-2 rounded shadow text-md font-semibold font-heading capitalize cursor-pointer ${view === "front" ? "bg-primary-dark text-white": "bg-gray-300 text-primary-dark"}`}>{selectedColor.imageB ? "front" : "Close"}</button>
          <button onClick={()=> setView("back")} className={`px-4 py-2 rounded shadow text-md font-semibold font-heading capitalize cursor-pointer ${view === "back" ? "bg-primary-dark text-white": "bg-gray-300 text-primary-dark"}`}>{selectedColor.diaryImageOpen ? "Open" : "Back"}</button>
         
         </div>
         )}

         {/* quantity  */}

         <div className='quantiy space-y-1 '>
            <h1 className='text-md font-heading font-semibold text-primary-dark'>Qty</h1>
            <div className='flex items-center gap-3'>
            <div className='text-md bg-primary-dark text-white rounded-2xl py-1 px-5 font-semibold'>{quantiy}</div> 
            <div className='inc-dec gap-1'>
              <div onClick={()=> setQuantity(quantiy + 1 ) } className='text-primary-dark cursor-pointer'><CiCirclePlus size={30}/></div>
              <div onClick={()=> setQuantity(quantiy - 1 ) } className='text-primary-dark cursor-pointer'><CiCircleMinus  size={30} /></div>
            </div>
            </div>
         </div>
         

      {/* colors */}
        <h1 className='text-md font-heading font-semibold text-primary-dark  border-t pt-4 w-75 border-gray-400 '>Color options</h1>
        <div className='flex gap-2 '>
                 {Products.colors.map((color)=>(
                  <div className={`border cursor-pointer h-6 w-6 rounded-full shadow ${selectedColor.name === color.name ? "border-black scale-110" :  "border-gray-300"}`} key={color.name} onClick={() =>  setselectedColor(color)}
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
                   {/* button */}
                   <div className='flex gap-3 mt-3'>
                      <button 
             className='py-2 bg-primary-dark text-white text-md px-6 rounded-xl shadow-lg hover:scale-105  hover:bg-transparent border hover:border-[#1a1040]   duration-300 ease-in-out hover:text-primary-dark cursor-pointer font-semibold '>Add to Cart</button>
              <Link to={"/login"}>
              <button  
             className='py-2 bg-primary-dark text-white text-md  px-6   rounded-xl shadow-md hover:scale-105 hover:bg-transparent border hover:border-[#1a1040]  transition-all duration-300 ease-in-out hover:text-primary-dark cursor-pointer font-semibold '>Buy now</button></Link>
                   </div>
    
    </div>
     
      </div>
    </section>
  )
}

export default ProductDetails