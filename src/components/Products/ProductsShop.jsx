import React, { useState, useMemo } from 'react';
import { Product } from "../../data/Product.js";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { IoSearchOutline, IoFilterOutline } from 'react-icons/io5';

const ProductsShop = () => {
  const navigate = useNavigate();
  const [activeColors, setActiveColors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Apparel', 'Hydration', 'Dining', 'Stationery'];

  const filteredProducts = useMemo(() => {
    return Product.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className='py-20 px-6 sm:px-16 bg-[#fcfcfd]'>
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-[2px] bg-accent"></span>
            <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Studio Collection</span>
          </motion.div>
          <h1 className='text-6xl font-black text-primary-dark mb-6 tracking-tight leading-tight'>Explore <span className="text-accent">Collection</span></h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">Discover our curated selection of premium custom products, engineered for quality and personalized for your unique brand identity.</p>
        </div>

        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <div className="relative flex-1 sm:w-96 group">
            <IoSearchOutline className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={22} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white border border-gray-100 rounded-[32px] shadow-xl shadow-gray-200/20 outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all font-semibold text-primary-dark"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-4 mb-20 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-500 border ${activeCategory === cat
              ? 'bg-primary-dark text-white border-primary-dark shadow-2xl shadow-primary-dark/30'
              : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-gray-600'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <AnimatePresence mode="wait">
        {filteredProducts.length > 0 ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='products-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-stretch mt-10 max-w-7xl mx-auto'
          >
            {filteredProducts.map((products, pIdx) => {
              const selectedColor = activeColors[products.id] || products.colors[0];

              const handleColorChange = (productId, color) => {
                setActiveColors(prev => ({
                  ...prev,
                  [productId]: color
                }));
              };

              // Use high-fidelity base image logic similar to ProductDetails.jsx
              const isColorableProduct = [1, 2, 3, 4, 6].includes(products.id);
              const whiteImageObj = products.colors.find(c => c.name === 'white');
              const blackImageObj = products.colors.find(c => c.name === 'black');

              const getBaseImage = (view) => {
                if (!isColorableProduct) {
                  return view === 'front'
                    ? (selectedColor.imageF || selectedColor.BottleImage || selectedColor.CapImage || selectedColor.MugImage || selectedColor.diaryImageClose || selectedColor.PenImage)
                    : (selectedColor.imageB || selectedColor.diaryImageOpen);
                }

                if (products.id === 1) return view === 'front' ? (whiteImageObj?.imageF || products.colors[0].imageF) : (whiteImageObj?.imageB || products.colors[0].imageB);
                if (products.id === 2) return whiteImageObj?.BottleImage || products.colors[0].BottleImage;
                if (products.id === 3) return whiteImageObj?.CapImage || products.colors[0].CapImage;
                if (products.id === 4) return whiteImageObj?.MugImage || products.colors[0].MugImage;
                if (products.id === 5) return view === 'front' ? (blackImageObj?.diaryImageClose || products.colors[0].diaryImageClose) : (blackImageObj?.diaryImageOpen || products.colors[0].diaryImageOpen);
                if (products.id === 6) return selectedColor.PenImage;
                return products.colors[0].imageF;
              };

              const frontBase = getBaseImage('front');
              const backBase = getBaseImage('back');
              const hasBackView = !!backBase && (products.id === 1 || products.id === 5);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: pIdx * 0.05 }}
                  className='bg-white rounded-[48px] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 group relative'
                  key={products.id}
                >
                  {/* Badge */}
                  {pIdx === 0 && (
                    <div className="absolute top-10 left-10 z-10 bg-accent text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-accent/20">
                      Best Seller
                    </div>
                  )}

                  {/* Rendering Area */}
                  <div className='w-full aspect-[4/5] overflow-hidden relative bg-[#f9f9f9] rounded-[40px] border border-gray-50 flex items-center justify-center p-12 transition-all duration-700 hover:bg-white group/image'>
                    <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700 group-hover/image:scale-105">

                      {/* --- FRONT VIEW --- */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hasBackView ? "group-hover/image:opacity-0 group-hover/image:scale-90" : ""}`}>
                        <img
                          className="max-w-full max-h-full object-contain cursor-pointer"
                          src={frontBase}
                          alt={products.name}
                          style={
                            isColorableProduct && selectedColor.name !== "white"
                              ? {
                                filter: selectedColor.name === 'black'
                                  ? (products.id === 2 ? 'brightness(0.7) contrast(2.5) saturate(0)' : (products.id === 4 ? 'brightness(0.8) contrast(1.3)' : 'brightness(0.6) contrast(1.6)'))
                                  : ((products.id === 5) ? 'invert(1) brightness(1.5) contrast(1.2)' :
                                    (products.id === 3 ? 'brightness(1.1) contrast(1.4) saturate(1.1)' :
                                      (products.id === 2 ? 'brightness(0.9) contrast(1.2)' : 'brightness(0.85) contrast(1.3)'))),
                              }
                              : {}
                          }
                        />
                        {isColorableProduct && selectedColor.name !== "white" && (
                          <div
                            className="absolute inset-0 mix-blend-multiply opacity-80"
                            style={{
                              background: selectedColor.name === 'black'
                                ? (products.id === 4
                                  ? 'linear-gradient(to right, #000 0%, #1a1a1a 15%, #2a2a2a 50%, #1a1a1a 85%, #000 100%), linear-gradient(to bottom, transparent 80%, #000 100%)'
                                  : 'linear-gradient(to right, #0a0a0a 0%, #2a2a2a 20%, #3a3a3a 50%, #2a2a2a 80%, #0a0a0a 100%)')
                                : (products.id === 3
                                  ? `radial-gradient(circle at 50% 40%, ${selectedColor.name} 0%, rgba(0,0,0,0.1) 100%)`
                                  : (products.id === 4
                                    ? `linear-gradient(to right, rgba(0,0,0,0.2) 0%, ${selectedColor.name} 20%, ${selectedColor.name} 80%, rgba(0,0,0,0.2) 100%), linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.15) 100%)`
                                    : (products.id === 5
                                      ? `linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 15%, transparent 30%), linear-gradient(135deg, ${selectedColor.name} 0%, rgba(0,0,0,0.1) 100%)`
                                      : (products.id === 6
                                        ? 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 20%, transparent 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.6) 100%)'
                                        : selectedColor.name)))),
                              WebkitMaskImage: `url(${frontBase})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${frontBase})`,
                              maskSize: 'contain',
                            }}
                          />
                        )}
                        {isColorableProduct && selectedColor.name !== "white" && (
                          <div
                            className="absolute inset-0 mix-blend-screen opacity-40"
                            style={{
                              background: products.id === 4
                                ? 'linear-gradient(105deg, rgba(255,255,255,0.4) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.4) 100%)'
                                : (products.id === 6
                                  ? 'linear-gradient(to bottom, transparent 22%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.1) 30%, transparent 35%, transparent 65%, rgba(255,255,255,0.2) 70%, transparent 75%)'
                                  : 'linear-gradient(to right, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 25%, transparent 50%, rgba(255,255,255,0.3) 100%)'),
                              WebkitMaskImage: `url(${frontBase})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                            }}
                          />
                        )}
                      </div>

                      {/* --- BACK VIEW (Hover) --- */}
                      {hasBackView && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-700 ease-out">
                          <img
                            className="max-w-full max-h-full object-contain cursor-pointer"
                            src={backBase}
                            alt={products.name}
                            style={
                              isColorableProduct && selectedColor.name !== "white"
                                ? {
                                  filter: selectedColor.name === 'black'
                                    ? (products.id === 2 ? 'brightness(0.7) contrast(2.5) saturate(0)' : (products.id === 4 ? 'brightness(0.8) contrast(1.3)' : 'brightness(0.6) contrast(1.6)'))
                                    : ((products.id === 5) ? 'invert(1) brightness(1.5) contrast(1.2)' :
                                      (products.id === 3 ? 'brightness(1.1) contrast(1.4) saturate(1.1)' :
                                        (products.id === 2 ? 'brightness(0.9) contrast(1.2)' : 'brightness(0.85) contrast(1.3)'))),
                                }
                                : {}
                            }
                          />
                          {isColorableProduct && selectedColor.name !== "white" && (
                            <div
                              className="absolute inset-0 mix-blend-multiply opacity-80"
                              style={{
                                background: selectedColor.name === 'black'
                                  ? 'linear-gradient(to right, #0a0a0a 0%, #2a2a2a 20%, #3a3a3a 50%, #2a2a2a 80%, #0a0a0a 100%)'
                                  : selectedColor.name,
                                WebkitMaskImage: `url(${backBase})`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskImage: `url(${backBase})`,
                                maskSize: 'contain',
                              }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>



                  {/* Info Area */}
                  <div className='flex flex-col flex-grow mt-10'>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{products.category}</p>
                        <h2 className='text-3xl font-black text-primary-dark tracking-tight'>{products.name}</h2>
                      </div>
                      <p className='text-2xl font-black text-accent'>₹{products.price}</p>
                    </div>

                    <p className="text-gray-400 text-sm font-medium line-clamp-2 mb-8 pr-10">{products.description}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className='flex -space-x-1'>
                        {products.colors.map((color) => (
                          <div
                            key={color.name}
                            onClick={() => handleColorChange(products.id, color)}
                            className={`h-8 w-8 rounded-full shadow-sm cursor-pointer border-4 transition-all hover:scale-125 z-10 hover:z-20 ${selectedColor.name === color.name ? "border-accent scale-110" : "border-white"
                              }`}
                            style={{
                              background: color.name === "silver" ? "linear-gradient(to right, #ccc, #eee)" : (color.name === 'black' ? '#222' : color.name),
                            }}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => navigate(`/products/${products.id}`)}
                        className='px-8 py-4 bg-primary-dark text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-accent transition-all duration-500 shadow-xl shadow-primary-dark/10 hover:shadow-accent/20 active:scale-95'
                      >
                        Customize Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-40 text-center"
          >
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8 text-gray-300">
              <IoSearchOutline size={48} />
            </div>
            <h3 className="text-3xl font-black text-primary-dark mb-3">No products found</h3>
            <p className="text-gray-500 max-w-xs mx-auto font-medium text-lg">Try adjusting your search or category filters to find what you're looking for.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-10 px-12 py-4 bg-primary-dark text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-primary-dark/20 transition-all hover:scale-105"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsShop;