import React, { use } from 'react'
import { motion } from "framer-motion";
import { useState, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Product } from '../../data/Product'
import { useCart } from '../../context/CartContext';
import { BsUpload } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosColorFill } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, updateCartItem, cartItems } = useCart();

  // Check if we are editing an existing item from cart
  const queryParams = new URLSearchParams(location.search);
  const editingCartId = queryParams.get('edit');
  const editingItem = editingCartId ? cartItems.find(item => item.cartId === Number(editingCartId)) : null;

  const { id } = useParams();
  const Products = Product.find(i => i.id === Number(id))
  const defaultColor = editingItem ? editingItem.selectedColor : Products.colors[0];
  const [selectedColor, setselectedColor] = useState(defaultColor)
  const [view, setView] = useState("front")
  const images = selectedColor.imageF || selectedColor.BottleImage || selectedColor.CapImage || selectedColor.MugImage || selectedColor.diaryImageClose || selectedColor.PenImage;

  //  For Customization
  const [activeTab, setActiveTab] = useState("color");
  const [activeTextId, setActiveTextId] = useState(null);
  const defaultDesign = { texts: [], logo: null, logoSize: 100, logoRotate: 0, logoX: 0, logoY: 0 };
  const [designs, setDesigns] = useState(editingItem ? editingItem.designs : { front: { ...defaultDesign }, back: { ...defaultDesign } });

  const [quantiy, setQuantity] = useState(editingItem ? editingItem.quantity : 1);
  const [size, setSize] = useState(editingItem ? editingItem.size : "M");

  const addText = () => {
    const newText = {
      id: Date.now(),
      text: "New Text",
      fontSize: 24,
      textColor: "#000000",
      textRotate: 0,
      fontFamily: "Arial",
      x: 0,
      y: 0
    };
    setDesigns(prev => ({
      ...prev,
      [view]: { ...prev[view], texts: [...prev[view].texts, newText] }
    }));
    setActiveTextId(newText.id);
  };

  const updateText = (id, key, value) => {
    setDesigns(prev => ({
      ...prev,
      [view]: {
        ...prev[view],
        texts: prev[view].texts.map(t => t.id === id ? { ...t, [key]: value } : t)
      }
    }));
  };

  const removeText = (id) => {
    setDesigns(prev => ({
      ...prev,
      [view]: {
        ...prev[view],
        texts: prev[view].texts.filter(t => t.id !== id)
      }
    }));
    if (activeTextId === id) setActiveTextId(null);
  };

  const updateDesign = (key, value) => {
    setDesigns(prev => ({ ...prev, [view]: { ...prev[view], [key]: value } }));
  };

  const fileRef = useRef();
  const colorRef = useRef();
  const constraintsRefFront = useRef(null);
  const constraintsRefBack = useRef(null);

  const currentDesign = designs[view];

  const handleAddToCart = () => {
    const getBaseImageForView = (v) => {
      return isColorableProduct ? (
        Products.id === 1 ? (v === "front" ? (whiteImageObj?.imageF || images) : (whiteImageObj?.imageB || images)) :
          Products.id === 2 ? (whiteImageObj?.BottleImage || images) :
            Products.id === 3 ? (whiteImageObj?.CapImage || images) :
              Products.id === 4 ? (whiteImageObj?.MugImage || images) :
                Products.id === 5 ? (v === "front" ? (blackImageObj?.diaryImageClose || images) : (blackImageObj?.diaryImageOpen || images)) :
                  Products.id === 6 ? (blackImageObj?.PenImage || images) :
                    images
      ) : images;
    };

    const productData = {
      id: Products.id,
      name: Products.name,
      price: Products.price,
      selectedColor,
      designs,
      quantity: quantiy,
      size,
      mainImage: baseImage,
      frontImage: getBaseImageForView("front"),
      backImage: getBaseImageForView("back")
    };

    if (editingCartId) {
      updateCartItem(Number(editingCartId), productData);
      alert("Product updated in cart!");
    } else {
      addToCart(productData);
      alert("Product added to cart!");
    }
    navigate('/cart');
  };

  const getPrintableArea = () => {
    if (Products.id === 1) return { top: "34%", left: "32%", right: "32%", bottom: "34%", labelH: "30cm", labelW: "28cm" }; // T-shirt
    if (Products.id === 2) return { top: "28%", left: "35%", right: "35%", bottom: "12%", labelH: "8.8cm", labelW: "11.8cm" }; // Bottle
    if (Products.id === 3) return { top: "42%", left: "25%", right: "25%", bottom: "40%" }; // Cap
    if (Products.id === 4) return { top: "42%", left: "25%", right: "35%", bottom: "28%", labelH: "4.0cm", labelW: "5.0cm" }; // Mug
    if (Products.id === 5 && view === "back") return { top: "0%", left: "0%", right: "0%", bottom: "0%" }; // Open Diary
    if (Products.id === 6) return { top: "30%", left: "45%", right: "45%", bottom: "50%", labelH: "3cm", labelW: "1.5cm" }; // Pen
    return { top: "34%", left: "32%", right: "32%", bottom: "34%" };
  }
  const printableArea = getPrintableArea();
  const isColorableProduct = [1, 2, 3, 4, 6].includes(Products.id);
  const whiteImageObj = Products.colors.find(c => c.name === 'white');
  const blackImageObj = Products.colors.find(c => c.name === 'black');
  const silverImageObj = Products.colors.find(c => c.name === 'silver');

  const baseImage = isColorableProduct ? (
    Products.id === 1 ? (view === "front" ? (whiteImageObj?.imageF || images) : (whiteImageObj?.imageB || images)) :
      Products.id === 2 ? (whiteImageObj?.BottleImage || images) :
        Products.id === 3 ? (whiteImageObj?.CapImage || images) :
          Products.id === 4 ? (whiteImageObj?.MugImage || images) :
            Products.id === 5 ? (view === "front" ? (blackImageObj?.diaryImageClose || images) : (blackImageObj?.diaryImageOpen || images)) :
              Products.id === 6 ? (selectedColor?.PenImage || images) :
                images
  ) : images;

  return (
    <section className='min-h-screen flex items-center justify-center bg-[#f3f4f6] py-10 px-4 sm:px-10 pt-24'>
      <div className='w-full max-w-7xl h-[85vh] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex overflow-hidden border border-gray-200'>

        {/* 1. PRIMARY SIDEBAR */}
        <div className='w-[100px] min-w-[100px] bg-white flex flex-col items-center py-8 gap-4 border-r border-gray-100 z-10 shadow-[4px_0_15px_rgba(0,0,0,0.02)]'>
          <button onClick={() => setActiveTab('color')} className={`w-20 h-20 flex flex-col items-center justify-center gap-2 rounded-2xl transition-all duration-200 ${activeTab === 'color' ? 'bg-[#56ccf2] text-white shadow-md scale-105' : 'text-gray-600 hover:bg-gray-100'}`}>
            <IoIosColorFill size={28} />
            <span className={`text-[11px] font-semibold text-center leading-tight ${activeTab === 'color' ? 'text-white' : 'text-gray-800'}`}>Material<br />color</span>
          </button>

          <button onClick={() => setActiveTab('text')} className={`w-20 h-20 flex flex-col items-center justify-center gap-2 rounded-2xl transition-all duration-200 ${activeTab === 'text' ? 'bg-[#56ccf2] text-white shadow-md scale-105' : 'text-gray-600 hover:bg-gray-100'}`}>
            <span className={`text-3xl font-serif font-medium ${activeTab === 'text' ? 'text-white' : 'text-gray-700'}`}>T</span>
            <span className={`text-[12px] font-semibold ${activeTab === 'text' ? 'text-white' : 'text-gray-800'}`}>Text</span>
          </button>

          <button onClick={() => setActiveTab('logo')} className={`w-20 h-20 flex flex-col items-center justify-center gap-2 rounded-2xl transition-all duration-200 ${activeTab === 'logo' ? 'bg-[#56ccf2] text-white shadow-md scale-105' : 'text-gray-600 hover:bg-gray-100'}`}>
            <BsUpload size={24} className={activeTab === 'logo' ? 'text-white' : 'text-gray-700'} />
            <span className={`text-[12px] font-semibold ${activeTab === 'logo' ? 'text-white' : 'text-gray-800'}`}>Uploads</span>
          </button>
        </div>

        {/* 2. ACTIVE PANEL */}
        <div className='w-[320px] min-w-[320px] bg-[#f8f9fa] border-r border-gray-200 flex flex-col shadow-[4px_0_20px_rgba(0,0,0,0.04)] z-0 relative'>
          <div className='p-8 flex-grow overflow-y-auto custom-scrollbar'>

            {/* Color Tab */}
            {activeTab === 'color' && (
              <div className='animate-fadeIn'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Material color</h2>
                <p className='text-sm text-gray-700 mb-4 font-medium'>Selected color: <span className='text-black font-bold capitalize'>{selectedColor.name === '#56CCF2' ? 'Silicon Sky Blue' : selectedColor.name}</span></p>
                <div className='flex flex-wrap gap-4'>
                  {Products.colors.map((color) => (
                    <div
                      key={color.name}
                      onClick={() => setselectedColor(color)}
                      className={`cursor-pointer rounded-full p-[3px] border-[2px] transition-all duration-200 ease-in-out ${selectedColor.name === color.name ? 'border-[#3b82f6] scale-110' : 'border-transparent hover:scale-105'}`}
                    >
                      <div
                        className="h-10 w-10 rounded-full border border-gray-300 shadow-md"
                        style={{
                          background: color.name === "silver" ? "linear-gradient(to right, #ccc, #eee)" : (color.name === 'black' ? '#222' : color.name)
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Text Tab */}
            {activeTab === 'text' && (
              <div className='animate-fadeIn space-y-6 pb-10'>
                <div className='flex items-center justify-between mb-2'>
                  <h2 className='text-2xl font-bold text-gray-900'>Your Texts</h2>
                  <button
                    onClick={addText}
                    className='flex items-center gap-2 px-4 py-2 bg-[#1a1040] text-white rounded-xl text-sm font-bold hover:bg-[#281a64] transition-all shadow-md active:scale-95'
                  >
                    <CiCirclePlus size={20} /> Add New
                  </button>
                </div>

                {/* Text List Selection */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {currentDesign.texts.map((t, idx) => (
                    <div
                      key={t.id}
                      onClick={() => setActiveTextId(t.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border-2 cursor-pointer transition-all ${activeTextId === t.id ? 'border-[#56ccf2] bg-blue-50 text-[#1a1040]' : 'border-gray-200 text-gray-500 hover:border-gray-300 bg-white'}`}
                    >
                      Text {idx + 1}
                    </div>
                  ))}
                </div>

                {activeTextId && currentDesign.texts.find(t => t.id === activeTextId) ? (
                  <div className='space-y-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xs font-black text-gray-400 uppercase tracking-widest'>Editing Layer</span>
                      <button
                        onClick={() => removeText(activeTextId)}
                        className='text-red-500 hover:text-red-700 text-xs font-bold'
                      >
                        Remove
                      </button>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-bold text-gray-700'>Your Text</label>
                      <input
                        type='text'
                        placeholder='Type your text'
                        maxLength={15}
                        value={currentDesign.texts.find(t => t.id === activeTextId).text}
                        onChange={(e) => updateText(activeTextId, 'text', e.target.value)}
                        className='p-3 border border-gray-300 shadow-sm text-md rounded-xl outline-none focus:border-[#56ccf2] focus:ring-2 focus:ring-[#56ccf2]/20 transition-all'
                      />
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-bold text-gray-700'>Font Family</label>
                      <select
                        className='p-3 border border-gray-300 shadow-sm rounded-xl outline-none text-sm focus:border-[#56ccf2] focus:ring-2 focus:ring-[#56ccf2]/20 bg-white'
                        value={currentDesign.texts.find(t => t.id === activeTextId).fontFamily}
                        onChange={(e) => updateText(activeTextId, 'fontFamily', e.target.value)}
                      >
                        {['Arial', 'Georgia', 'Verdana', 'Helvetica', 'Times New Roman', 'Tahoma', 'Trebuchet MS', 'Courier New', 'Lucida Sans', 'Impact', 'Palatino', 'Comic Sans MS'].map(font => (
                          <option key={font}>{font}</option>
                        ))}
                      </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-bold text-gray-700'>Color</label>
                      <div
                        className='flex items-center gap-3 cursor-pointer p-3 border border-gray-300 bg-white shadow-sm rounded-xl hover:bg-gray-50 transition'
                        onClick={() => colorRef.current.click()}
                      >
                        <div className="h-7 w-7 rounded-full shadow-sm border border-gray-300" style={{ backgroundColor: currentDesign.texts.find(t => t.id === activeTextId).textColor }}></div>
                        <span className='text-sm font-semibold text-gray-700 uppercase tracking-wide'>{currentDesign.texts.find(t => t.id === activeTextId).textColor}</span>
                      </div>
                      <input
                        type='color'
                        className='hidden'
                        ref={colorRef}
                        value={currentDesign.texts.find(t => t.id === activeTextId).textColor}
                        onChange={(e) => updateText(activeTextId, 'textColor', e.target.value)}
                      />
                    </div>

                    <div className='flex flex-col gap-3 pt-2'>
                      <label className='text-sm font-bold text-gray-700 flex justify-between items-center'>
                        <span>Font Size</span>
                        <span className='bg-gray-200 px-2 py-1 rounded text-xs'>{currentDesign.texts.find(t => t.id === activeTextId).fontSize}px</span>
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="50"
                        value={currentDesign.texts.find(t => t.id === activeTextId).fontSize}
                        onChange={(e) => updateText(activeTextId, 'fontSize', Number(e.target.value))}
                        className="w-full accent-[#56ccf2]"
                      />
                    </div>

                    <div className='flex flex-col gap-3 pt-2'>
                      <label className='text-sm font-bold text-gray-700 flex justify-between items-center'>
                        <span>Rotate</span>
                        <span className='bg-gray-200 px-2 py-1 rounded text-xs'>{currentDesign.texts.find(t => t.id === activeTextId).textRotate}°</span>
                      </label>
                      <input
                        type="range"
                        value={currentDesign.texts.find(t => t.id === activeTextId).textRotate}
                        min="-180"
                        max="180"
                        onChange={(e) => updateText(activeTextId, 'textRotate', Number(e.target.value))}
                        className="w-full accent-[#56ccf2]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className='h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 text-gray-400'>
                    <p className='text-sm font-medium'>No text selected</p>
                    <p className='text-[10px] mt-1'>Click "Add New" to start designing</p>
                  </div>
                )}
              </div>
            )}

            {/* Logo Tab */}
            {activeTab === 'logo' && (
              <div className='animate-fadeIn space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Upload Image</h2>

                <input className='hidden' ref={fileRef} type="file" accept='image/*' onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) updateDesign('logo', URL.createObjectURL(file));
                }} />

                <div className='border-2 border-dashed border-gray-300 bg-white rounded-2xl h-56 flex flex-col justify-center items-center relative cursor-pointer hover:bg-blue-50 hover:border-[#56ccf2] transition-all group' onClick={() => fileRef.current.click()}>
                  {currentDesign.logo ? (
                    <>
                      <img src={currentDesign.logo} className='w-full h-full rounded-2xl object-contain p-2' />
                      <div onClick={(e) => { e.stopPropagation(); updateDesign('logo', null); }} className='absolute p-2 bg-white text-gray-600 shadow-lg right-3 top-3 rounded-full hover:bg-red-50 hover:text-red-500 transition'>
                        <IoCloseOutline size={20} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-[#56ccf2]/20 transition-all'>
                        <BsUpload size={24} className='text-gray-400 group-hover:text-[#56ccf2] transition-all' />
                      </div>
                      <span className='text-sm font-bold text-gray-500 group-hover:text-[#56ccf2]'>Click to upload logo</span>
                    </>
                  )}
                </div>

                {currentDesign.logo && (
                  <div className='bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-5 mt-4'>
                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-bold text-gray-700 flex justify-between items-center'><span>Image Size</span> <span className='bg-gray-200 px-2 py-1 rounded text-xs'>{currentDesign.logoSize}px</span></label>
                      <input type="range" value={currentDesign.logoSize} min="50" max="250" onChange={(e) => updateDesign('logoSize', Number(e.target.value))} className="w-full accent-[#56ccf2]" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-bold text-gray-700 flex justify-between items-center'><span>Rotate</span> <span className='bg-gray-200 px-2 py-1 rounded text-xs'>{currentDesign.logoRotate}°</span></label>
                      <input type="range" value={currentDesign.logoRotate} min="-180" max="180" onChange={(e) => updateDesign('logoRotate', Number(e.target.value))} className="w-full accent-[#56ccf2]" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Info Area */}
          <div className='p-6 bg-white border-t border-gray-200 flex flex-col gap-5 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] relative z-10'>
            <div>
              <h1 className='text-xl font-bold text-gray-900 leading-tight'>{Products.name}</h1>
              <p className='text-2xl font-black text-gray-900 mt-1'>₹{Products.price}</p>
            </div>

            {Products.id === 1 && (
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-bold text-gray-700'>Size</span>
                <div className='flex items-center justify-between gap-2'>
                  {['S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`flex-1 h-10 rounded-xl font-bold text-[13px] border-2 flex items-center justify-center transition-all ${size === s ? 'border-gray-900 bg-gray-900 text-white shadow-md' : 'border-gray-200 text-gray-600 hover:border-gray-400 bg-gray-50 hover:bg-white'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className='flex items-center justify-between mt-1'>
              <span className='text-sm font-bold text-gray-700'>Quantity</span>
              <div className='flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-1'>
                <button onClick={() => setQuantity(Math.max(1, quantiy - 1))} className='p-1.5 hover:bg-white hover:shadow-sm rounded-lg text-gray-600 transition'><CiCircleMinus size={22} /></button>
                <span className='font-bold w-6 text-center text-lg'>{quantiy}</span>
                <button onClick={() => setQuantity(quantiy + 1)} className='p-1.5 hover:bg-white hover:shadow-sm rounded-lg text-gray-600 transition'><CiCirclePlus size={22} /></button>
              </div>
            </div>

            <div className='flex flex-col gap-3 mt-2'>
              <button
                onClick={handleAddToCart}
                className='w-full py-3.5 bg-white text-gray-900 border-2 border-gray-900 rounded-xl font-bold text-[15px] hover:bg-gray-50 transition active:scale-[0.98]'
              >
                {editingCartId ? "Save Changes" : "Add to Cart"}
              </button>
              <Link to="/login" className='w-full'>
                <button className='w-full py-3.5 bg-[#1a1040] text-white rounded-xl font-bold text-[15px] hover:bg-[#281a64] shadow-lg shadow-[#1a1040]/30 transition active:scale-[0.98]'>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. PREVIEW AREA */}
        <div className='flex-grow bg-gray-200/40 flex flex-col relative'>

          {/* Top bar for View Toggles (Front/Back) */}
          {(selectedColor.imageB || selectedColor.diaryImageOpen) && (
            <div className='absolute top-8 left-1/2 -translate-x-1/2 flex bg-white rounded-full shadow-lg p-1.5 z-50 border border-gray-100'>
              <button onClick={() => setView("front")} className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${view === "front" ? "bg-gray-900 text-white shadow-md" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`}>{selectedColor.imageB ? "Front" : "Close"}</button>
              <button onClick={() => setView("back")} className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${view === "back" ? "bg-gray-900 text-white shadow-md" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`}>{selectedColor.diaryImageOpen ? "Open" : "Back"}</button>
            </div>
          )}

          {/* Main Image Container */}
          <div className='flex-grow flex items-center justify-center p-6'>
            <div className='relative w-full max-w-[650px] aspect-[4/5] flex justify-center items-center'>

              {/* The T-Shirt Rendering Logic */}
              {view === "front" ? (
                <div className="relative w-full h-full drop-shadow-2xl transition-transform duration-300">
                  <img
                    className='absolute inset-0 h-full w-full object-contain'
                    src={isColorableProduct ? baseImage : images}
                    alt={defaultColor.name}
                    style={
                      isColorableProduct && selectedColor.name !== "white"
                        ? {
                          filter: selectedColor.name === 'black'
                            ? (Products.id === 2 ? 'brightness(0.7) contrast(2.5) saturate(0)' : (Products.id === 4 ? 'brightness(0.8) contrast(1.3)' : 'brightness(0.6) contrast(1.6)'))
                            : ((Products.id === 5) ? 'invert(1) brightness(1.5) contrast(1.2)' :
                              (Products.id === 3 ? 'brightness(1.1) contrast(1.4) saturate(1.1)' :
                                (Products.id === 2 ? 'brightness(0.9) contrast(1.2)' : 'brightness(0.85) contrast(1.3)'))),
                        }
                        : {}
                    }
                  />
                  {isColorableProduct && selectedColor.name !== "white" && (
                    <>
                      <div
                        className="absolute inset-0 mix-blend-multiply"
                        style={{
                          background: selectedColor.name === 'black'
                            ? (Products.id === 4
                              ? 'linear-gradient(to right, #000 0%, #1a1a1a 15%, #2a2a2a 50%, #1a1a1a 85%, #000 100%), linear-gradient(to bottom, transparent 80%, #000 100%)'
                              : 'linear-gradient(to right, #0a0a0a 0%, #2a2a2a 20%, #3a3a3a 50%, #2a2a2a 80%, #0a0a0a 100%)')
                            : (Products.id === 3
                              ? `radial-gradient(circle at 50% 40%, ${selectedColor.name === '#56CCF2' ? '#56CCF2' : selectedColor.name} 0%, rgba(0,0,0,0.1) 100%)`
                              : (Products.id === 4
                                ? `linear-gradient(to right, rgba(0,0,0,0.2) 0%, ${selectedColor.name} 20%, ${selectedColor.name} 80%, rgba(0,0,0,0.2) 100%), linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.15) 100%)`
                                : (Products.id === 5
                                  ? `linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 15%, transparent 30%), linear-gradient(135deg, ${selectedColor.name} 0%, rgba(0,0,0,0.1) 100%)`
                                  : (selectedColor.name === 'navy' ? '#000080' : (selectedColor.name === '#56CCF2' ? '#56CCF2' : selectedColor.name))))),
                          WebkitMaskImage: `url(${baseImage})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${baseImage})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                      {/* Studio Highlight Layer */}
                      <div
                        className={`absolute inset-0 mix-blend-screen ${(selectedColor.name === 'black' || [4, 5].includes(Products.id)) ? 'opacity-50' : 'opacity-0'}`}
                        style={{
                          background: Products.id === 4
                            ? 'linear-gradient(105deg, rgba(255,255,255,0.4) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.4) 100%), linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 10%)'
                            : (Products.id === 5
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.1) 100%)'
                              : 'linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.3) 100%)'),
                          WebkitMaskImage: `url(${baseImage})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${baseImage})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                      {/* Realistic Fabric Texture (Cap Only) */}
                      {Products.id === 3 && (
                        <div
                          className="absolute inset-0 opacity-30 mix-blend-soft-light"
                          style={{
                            background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)',
                            WebkitMaskImage: `url(${baseImage})`,
                            WebkitMaskSize: 'contain',
                            maskImage: `url(${baseImage})`,
                            maskSize: 'contain',
                          }}
                        />
                      )}

                      {/* Pen (id 6) Realistic Enhancement Layers */}
                      {Products.id === 6 && (
                        <>
                          {/* Body Curvature / Cylindrical Depth */}
                          <div
                            className="absolute inset-0 mix-blend-multiply opacity-70"
                            style={{
                              background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 20%, transparent 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.6) 100%)',
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                          {/* Glossy Plastic Reflections */}
                          <div
                            className="absolute inset-0 mix-blend-screen opacity-50"
                            style={{
                              background: 'linear-gradient(to bottom, transparent 22%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.1) 30%, transparent 35%, transparent 65%, rgba(255,255,255,0.2) 70%, transparent 75%)',
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                          {/* Top-Left Studio Light */}
                          <div
                            className="absolute inset-0 mix-blend-overlay opacity-60"
                            style={{
                              background: 'radial-gradient(circle at 15% 30%, rgba(255,255,255,0.6) 0%, transparent 60%)',
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                          {/* Metallic Shine for Tip and Clip */}
                          <div
                            className="absolute inset-0 mix-blend-screen opacity-40"
                            style={{
                              background: 'linear-gradient(135deg, transparent 75%, rgba(255,255,255,0.7) 90%, transparent 100%), linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 20%)',
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                          {/* Rim Lighting (3D Edge Definition) */}
                          <div
                            className="absolute inset-0 mix-blend-screen opacity-30"
                            style={{
                              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 3%, transparent 97%, rgba(255,255,255,0.2) 100%)',
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                          {/* Premium Micro-Texture Grain */}
                          <div
                            className="absolute inset-0 opacity-15 mix-blend-overlay"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                          {/* Core Shadow (Deep bottom-side occlusion) */}
                          <div
                            className="absolute inset-0 mix-blend-multiply opacity-50"
                            style={{
                              background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.7) 100%)',
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                          {/* Specular Hotspot (Sharp light reflection) */}
                          <div
                            className="absolute inset-0 mix-blend-screen opacity-70"
                            style={{
                              background: 'radial-gradient(circle at 12% 24%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 15%, transparent 45%)',
                              WebkitMaskImage: `url(${baseImage})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${baseImage})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                        </>
                      )}

                      <div
                        className={`absolute inset-0 mix-blend-overlay ${selectedColor.name === 'black' ? 'opacity-85' : 'opacity-70'}`}
                        style={{
                          background: selectedColor.name === 'black'
                            ? (Products.id === 4
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.5) 100%), radial-gradient(circle at 25% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                              : 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.5) 100%)')
                            : (Products.id === 3
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 100%), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                              : (Products.id === 4
                                ? 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)'
                                : (selectedColor.name === '#56CCF2'
                                  ? 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.5) 100%)'
                                  : selectedColor.name))),
                          WebkitMaskImage: `url(${baseImage})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${baseImage})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />

                      {/* Ambient Occlusion / Structural Depth (Cap Only) */}
                      {Products.id === 3 && (
                        <div
                          className="absolute inset-0 mix-blend-multiply opacity-25"
                          style={{
                            background: 'linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.4) 100%), radial-gradient(circle at 50% 100%, rgba(0,0,0,0.5) 0%, transparent 70%)',
                            WebkitMaskImage: `url(${baseImage})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url(${baseImage})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                      )}

                    </>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-full drop-shadow-2xl transition-transform duration-300">
                  <img
                    className='absolute inset-0 h-full w-full object-contain'
                    src={isColorableProduct ? baseImage : (selectedColor.imageB || selectedColor.diaryImageOpen)}
                    alt={defaultColor.name}
                    style={
                      isColorableProduct && selectedColor.name !== "white"
                        ? {
                          filter: selectedColor.name === 'black'
                            ? (Products.id === 2 ? 'brightness(0.7) contrast(2.5) saturate(0)' : (Products.id === 4 ? 'brightness(0.8) contrast(1.3)' : 'brightness(0.6) contrast(1.6)'))
                            : (([5, 6].includes(Products.id)) ? 'invert(1) brightness(1.5) contrast(1.2)' :
                              (Products.id === 3 ? 'brightness(1.1) contrast(1.4) saturate(1.1)' :
                                (Products.id === 2 ? 'brightness(0.9) contrast(1.2)' : 'brightness(0.85) contrast(1.3)'))),
                        }
                        : {}
                    }
                  />
                  {isColorableProduct && selectedColor.name !== "white" && (
                    <>
                      <div
                        className="absolute inset-0 mix-blend-multiply"
                        style={{
                          background: selectedColor.name === 'black'
                            ? 'linear-gradient(to right, #0a0a0a 0%, #2a2a2a 20%, #3a3a3a 50%, #2a2a2a 80%, #0a0a0a 100%)'
                            : (Products.id === 3
                              ? `radial-gradient(circle at 50% 40%, ${selectedColor.name === '#56CCF2' ? '#56CCF2' : selectedColor.name} 0%, rgba(0,0,0,0.5) 100%)`
                              : (Products.id === 4
                                ? `linear-gradient(to right, rgba(0,0,0,0.2) 0%, ${selectedColor.name} 20%, ${selectedColor.name} 80%, rgba(0,0,0,0.2) 100%), linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.15) 100%)`
                                : (selectedColor.name === '#56CCF2' ? '#56CCF2' : selectedColor.name))),
                          WebkitMaskImage: `url(${baseImage})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${baseImage})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                      {/* Studio Highlight Layer */}
                      <div
                        className={`absolute inset-0 mix-blend-screen ${(selectedColor.name === 'black' || Products.id === 4) ? 'opacity-50' : 'opacity-0'}`}
                        style={{
                          background: Products.id === 4
                            ? 'linear-gradient(105deg, rgba(255,255,255,0.4) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.4) 100%), linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 10%)'
                            : 'linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.3) 100%)',
                          WebkitMaskImage: `url(${baseImage})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${baseImage})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                      {/* Realistic Fabric Texture (Cap Back View) */}
                      {Products.id === 3 && (
                        <div
                          className="absolute inset-0 opacity-30 mix-blend-soft-light"
                          style={{
                            background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)',
                            WebkitMaskImage: `url(${baseImage})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url(${baseImage})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                      )}

                      {/* Realistic Ceramic Texture (Mug Only) */}
                      {Products.id === 4 && (
                        <div
                          className="absolute inset-0 opacity-20 mix-blend-soft-light"
                          style={{
                            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.1) 100%)',
                            WebkitMaskImage: `url(${baseImage})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url(${baseImage})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                      )}

                      <div
                        className={`absolute inset-0 mix-blend-overlay ${selectedColor.name === 'black' ? 'opacity-85' : 'opacity-70'}`}
                        style={{
                          background: selectedColor.name === 'black'
                            ? (Products.id === 4
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.5) 100%), radial-gradient(circle at 25% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                              : 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.5) 100%)')
                            : (Products.id === 3
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 100%), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                              : (Products.id === 4
                                ? 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)'
                                : (selectedColor.name === '#56CCF2'
                                  ? 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.5) 100%)'
                                  : selectedColor.name))),

                          WebkitMaskImage: `url(${baseImage})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${baseImage})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                    </>
                  )}
                </div>
              )}

              {/* Printable Area Box (Renders for both Front and Back) */}
              <div className="absolute z-40 pointer-events-none" style={{
                top: printableArea.top,
                left: printableArea.left,
                right: printableArea.right,
                bottom: printableArea.bottom
              }}>

                <div
                  ref={view === "front" ? constraintsRefFront : constraintsRefBack}
                  className={`absolute inset-0 border ${(Products.id === 5 && view === "back") ? 'border-none' : 'border-dashed'} ${selectedColor.name === '#56CCF2' ? 'border-black' : 'border-[#56ccf2]'} overflow-visible flex flex-col items-center justify-center pointer-events-auto`}
                >


                  {/* Render All Text Layers */}
                  {currentDesign.texts.map((t) => (
                    <motion.p
                      key={t.id}
                      drag
                      dragConstraints={view === "front" ? constraintsRefFront : constraintsRefBack}
                      dragElastic={0.2}
                      initial={{ x: t.x, y: t.y }}
                      animate={{ x: t.x, y: t.y }}
                      onDragEnd={(e, info) => {
                        const target = e.target;
                        const parent = target.parentElement;
                        if (!parent) return;
                        const targetRect = target.getBoundingClientRect();
                        const parentRect = parent.getBoundingClientRect();

                        const newX = (targetRect.left + targetRect.width / 2) - (parentRect.left + parentRect.width / 2);
                        const newY = (targetRect.top + targetRect.height / 2) - (parentRect.top + parentRect.height / 2);

                        updateText(t.id, 'x', newX);
                        updateText(t.id, 'y', newY);
                      }}
                      style={{
                        fontFamily: t.fontFamily,
                        fontSize: `${t.fontSize}px`,
                        color: t.textColor,
                        rotate: t.textRotate,
                      }}
                      onPointerDown={() => setActiveTextId(t.id)}
                      className={`font-bold absolute w-max h-max max-w-full cursor-move z-30 drop-shadow-md text-center break-words p-2 rounded outline-2 outline-dashed ${activeTextId === t.id ? (selectedColor.name === '#56CCF2' ? 'outline-black/50' : 'outline-[#56ccf2]/50') : 'outline-transparent'}`}
                    >
                      {t.text || "Type here..."}
                    </motion.p>
                  ))}

                  {currentDesign.logo && (
                    <motion.img
                      src={currentDesign.logo}
                      drag
                      initial={{ x: currentDesign.logoX, y: currentDesign.logoY }}
                      animate={{ x: currentDesign.logoX, y: currentDesign.logoY }}
                      onDragEnd={(e, info) => {
                        const target = e.target;
                        const parent = target.parentElement;
                        if (!parent) return;
                        const targetRect = target.getBoundingClientRect();
                        const parentRect = parent.getBoundingClientRect();

                        const newX = (targetRect.left + targetRect.width / 2) - (parentRect.left + parentRect.width / 2);
                        const newY = (targetRect.top + targetRect.height / 2) - (parentRect.top + parentRect.height / 2);

                        updateDesign('logoX', newX);
                        updateDesign('logoY', newY);
                      }}
                      className="absolute h-max max-w-full cursor-move z-30 drop-shadow-lg object-contain"
                      dragConstraints={view === "front" ? constraintsRefFront : constraintsRefBack}
                      style={{
                        width: `${currentDesign.logoSize}px`,
                        rotate: currentDesign.logoRotate,
                      }}
                    />
                  )}
                </div>

                {/* Measurement Lines */}
                {(Products.id === 1 || Products.id === 2 || Products.id === 4 || Products.id === 6) && (
                  <>
                    {/* Safety Area Badge */}
                    <div className="absolute -top-8 right-0 flex gap-2">
                      <span className={`text-[10px] font-bold ${selectedColor.name === '#56CCF2' ? 'text-black border-black/30' : 'text-[#56ccf2] border-[#56ccf2]/30'} bg-blue-50 px-3 py-1 rounded-full border shadow-sm tracking-wide uppercase`}>Safety Area</span>
                    </div>

                    {/* Left Measurement Line */}
                    <div className="absolute top-0 bottom-0 -left-6 border-l border-gray-400 flex items-center justify-center">
                      <div className="absolute top-0 -left-1 w-2 h-[1px] bg-gray-400" />
                      <div className="absolute bottom-0 -left-1 w-2 h-[1px] bg-gray-400" />
                      <span className="text-[10px] font-medium text-gray-500 absolute right-2 whitespace-nowrap bg-[#fafafa] py-1">{printableArea.labelH}</span>
                    </div>

                    {/* Bottom Measurement Line */}
                    <div className="absolute left-0 right-0 -bottom-6 border-b border-gray-400 flex items-center justify-center">
                      <div className="absolute left-0 -bottom-1 w-[1px] h-2 bg-gray-400" />
                      <div className="absolute right-0 -bottom-1 w-[1px] h-2 bg-gray-400" />
                      <span className="text-[10px] font-medium text-gray-500 absolute top-2 whitespace-nowrap bg-[#fafafa] px-2">{printableArea.labelW}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductDetails;