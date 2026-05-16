import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdShoppingBag,
  MdLocationOn,
  MdSettings,
  MdDelete,
  MdCheckCircle,
  MdChevronRight,
  MdDescription,
  MdInventory,
  MdAdd,
  MdClose,
  MdVisibility
} from 'react-icons/md';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItem, clearCart } = useCart();
  const { currentUser, addOrder } = useAuth();
  const navigate = useNavigate();

  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'address', 'payment', 'success'
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('UPI');
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [previewView, setPreviewView] = useState("front");

  // Totals calculation
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = subtotal > 1000 ? 0 : 99;
  const gst = Math.round(subtotal * 0.18);
  const discount = subtotal > 5000 ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal + shipping + gst - discount;

  const steps = [
    { id: 'cart', label: 'Bag', icon: MdShoppingBag },
    { id: 'address', label: 'Shipping', icon: MdLocationOn },
    { id: 'payment', label: 'Secure Pay', icon: MdSettings },
  ];

  const updateQuantity = (cartId, qty) => {
    if (qty < 1) return;
    updateCartItem(cartId, { quantity: qty });
  };

  const startCheckout = () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setCheckoutStep('address');
    if (currentUser.addresses?.length > 0) {
      setSelectedAddress(currentUser.addresses[0]);
    }
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate payment processing delay
    setTimeout(() => {
      const orderData = {
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          qty: item.quantity || 1,
          price: item.price,
          selectedColor: item.selectedColor,
          designs: item.designs,
          mainImage: item.mainImage,
          frontImage: item.frontImage,
          backImage: item.backImage
        })),
        total: finalTotal,
        subtotal,
        tax: gst,
        shipping,
        discount,
        address: selectedAddress,
        paymentMethod: selectedPayment,
      };

      addOrder(orderData);
      setIsProcessing(false);
      setCheckoutStep('success');
      clearCart();
    }, 2000);
  };

  const getPrintableArea = (productId, view) => {
    if (productId === 1) return { top: "34%", left: "32%", right: "32%", bottom: "34%" };
    if (productId === 2) return { top: "28%", left: "35%", right: "35%", bottom: "12%" };
    if (productId === 3) return { top: "42%", left: "25%", right: "25%", bottom: "40%" };
    if (productId === 4) return { top: "42%", left: "25%", right: "35%", bottom: "28%" };
    if (productId === 5 && view === "back") return { top: "0%", left: "0%", right: "0%", bottom: "0%" };
    if (productId === 6) return { top: "30%", left: "45%", right: "45%", bottom: "50%" };
    return { top: "34%", left: "32%", right: "32%", bottom: "34%" };
  };

  const RenderHighFidelityThumb = ({ item, size = "large" }) => {
    const isColorable = [1, 2, 3, 4, 6].includes(item.id);
    const color = item.selectedColor;
    const baseImg = item.id === 6 ? (color?.PenImage || item.mainImage) : item.mainImage;

    return (
      <div className={`relative ${size === "large" ? "w-24 h-24 sm:w-32 sm:h-32" : "w-16 h-16"} bg-[#f8f9fa] rounded-3xl p-3 flex items-center justify-center border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-500`}>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={baseImg}
            className="absolute inset-0 w-full h-full object-contain"
            style={isColorable && color?.name !== "white" ? {
              filter: color.name === 'black'
                ? (item.id === 2 ? 'brightness(0.7) contrast(2.5) saturate(0)' : (item.id === 4 ? 'brightness(0.8) contrast(1.3)' : 'brightness(0.6) contrast(1.6)'))
                : ((item.id === 5) ? 'invert(1) brightness(1.5) contrast(1.2)' :
                  (item.id === 3 ? 'brightness(1.1) contrast(1.4) saturate(1.1)' :
                    (item.id === 2 ? 'brightness(0.9) contrast(1.2)' : 'brightness(0.85) contrast(1.3)')))
            } : {}}
          />
          {isColorable && color?.name !== "white" && (
            <div
              className="absolute inset-0 mix-blend-multiply opacity-80"
              style={{
                background: color.name === 'black'
                  ? (item.id === 4 ? 'linear-gradient(to right, #000 0%, #1a1a1a 15%, #2a2a2a 50%, #1a1a1a 85%, #000 100%)' : 'linear-gradient(to right, #0a0a0a 0%, #2a2a2a 20%, #3a3a3a 50%, #0a0a0a 100%)')
                  : color.name,
                WebkitMaskImage: `url(${baseImg})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: `url(${baseImg})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
            />
          )}
        </div>
      </div>
    );
  };

  if (checkoutStep === 'success') {
    return (
      <section className="min-h-screen pt-40 pb-20 px-4 flex flex-col items-center justify-center bg-[#fcfcfd]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[60px] p-12 sm:p-20 shadow-2xl shadow-black/5 max-w-4xl w-full text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-primary-dark to-accent"></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-green-500/20"
          >
            <MdCheckCircle size={56} />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl font-black text-primary-dark tracking-tight mb-4">Order Secured.</h1>
          <p className="text-gray-400 font-medium text-lg uppercase tracking-widest mb-12">Production Protocol Initialized</p>

          <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100 mb-12 text-left">
            <h3 className="text-xl font-black text-primary-dark mb-8 flex items-center gap-3">
              <MdInventory className="text-accent" /> High-Fidelity Queue
            </h3>
            <p className="text-sm font-medium text-gray-500 leading-relaxed">Your custom-engineered designs have been transmitted to our studio. You can track the real-time production status and inspect your high-fidelity renders in the user dashboard.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/profile')}
              className="px-12 py-5 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] hover:bg-accent transition-all shadow-2xl shadow-primary-dark/20"
            >
              Track in Dashboard
            </button>
            <button
              onClick={() => navigate('/products')}
              className="px-12 py-5 bg-white text-primary-dark border-2 border-primary-dark/10 rounded-[24px] font-black uppercase tracking-widest text-[11px] hover:bg-gray-50 transition-all"
            >
              Return to Studio
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fcfcfd] pt-32 pb-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Modern Progress Visualizer */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative flex justify-between w-full max-w-2xl px-10">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 z-0"></div>
            <motion.div
              className="absolute top-1/2 left-0 h-[2px] bg-accent -translate-y-1/2 z-0"
              animate={{ width: checkoutStep === 'cart' ? '0%' : checkoutStep === 'address' ? '50%' : '100%' }}
              transition={{ duration: 0.8, ease: "circOut" }}
            ></motion.div>

            {steps.map((step, i) => {
              const isActive = checkoutStep === step.id;
              const isCompleted = steps.findIndex(s => s.id === checkoutStep) > i;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-xl transition-all duration-500 ${isActive ? 'bg-primary-dark text-white scale-125 shadow-primary-dark/20' :
                    isCompleted ? 'bg-accent text-white' : 'bg-white text-gray-300 border-gray-100'
                    }`}>
                    {isCompleted ? <MdCheckCircle size={24} /> : <step.icon size={22} />}
                  </div>
                  <span className={`text-[9px] font-black mt-4 uppercase tracking-[0.2em] ${isActive ? 'text-primary-dark' : 'text-gray-300'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Flow Area */}
          <div className="flex-1 space-y-10">
            <AnimatePresence mode="wait">
              {checkoutStep === 'cart' && (
                <motion.div
                  key="cart"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-4xl font-black text-primary-dark tracking-tight">Shopping Bag</h2>
                      <p className="text-gray-400 font-medium text-sm mt-1">Review your custom-engineered products</p>
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{cartItems.length} Unique Designs</span>
                  </div>

                  {cartItems.length > 0 ? (
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.cartId} className="group bg-white rounded-[40px] p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 flex flex-col sm:flex-row items-center gap-10 relative overflow-hidden">
                          <RenderHighFidelityThumb item={item} />

                          <div className="flex-1 space-y-4 text-center sm:text-left">
                            <h3 className="text-2xl font-black text-primary-dark tracking-tight">{item.name}</h3>
                            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                              <span className="px-5 py-2 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-primary-dark flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ backgroundColor: item.selectedColor.name }}></div>
                                {item.selectedColor.name}
                              </span>
                              {item.size && (
                                <span className="px-5 py-2 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-primary-dark">Size {item.size}</span>
                              )}
                            </div>
                            <div className="flex gap-6 justify-center sm:justify-start">
                              <button onClick={() => navigate(`/products/${item.id}?edit=${item.cartId}`)} className="text-[9px] font-black text-accent uppercase tracking-[0.2em] hover:opacity-70 transition">Modify Design</button>
                              <button onClick={() => { setPreviewItem(item); setPreviewView("front"); }} className="text-[9px] font-black text-primary-dark uppercase tracking-[0.2em] hover:opacity-70 transition flex items-center gap-2"><MdVisibility /> Inspect Render</button>
                            </div>
                          </div>

                          <div className="flex flex-col items-center sm:items-end gap-6">
                            <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                              <button onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)} className="w-10 h-10 flex items-center justify-center text-primary-dark hover:bg-white rounded-xl transition-all shadow-sm">-</button>
                              <span className="w-12 flex items-center justify-center font-black text-primary-dark">{item.quantity || 1}</span>
                              <button onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)} className="w-10 h-10 flex items-center justify-center text-primary-dark hover:bg-white rounded-xl transition-all shadow-sm">+</button>
                            </div>
                            <p className="text-2xl font-black text-primary-dark tracking-tight">₹{item.price * (item.quantity || 1)}</p>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="absolute top-8 right-8 p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                          >
                            <MdDelete size={22} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-32 bg-white rounded-[48px] border border-gray-100">
                      <MdShoppingBag className="mx-auto text-gray-100 mb-8" size={120} />
                      <h4 className="text-3xl font-black text-primary-dark mb-4">Your bag is empty</h4>
                      <p className="text-gray-400 mb-12 max-w-sm mx-auto font-medium">Looks like you haven't engineered any products yet. Let's start building something iconic!</p>
                      <button onClick={() => navigate('/products')} className="px-16 py-5 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-primary-dark/20 hover:bg-accent transition-all">Explore Studio</button>
                    </div>
                  )}
                </motion.div>
              )}

              {checkoutStep === 'address' && (
                <motion.div
                  key="address"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div>
                    <h2 className="text-4xl font-black text-primary-dark tracking-tight">Deployment Location</h2>
                    <p className="text-gray-400 font-medium text-sm mt-1">Select a destination for your custom shipment</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentUser?.addresses?.map((addr) => (
                      <div
                        key={addr.id}
                        onClick={() => setSelectedAddress(addr)}
                        className={`group bg-white rounded-[40px] p-10 border-2 cursor-pointer transition-all duration-500 relative overflow-hidden ${selectedAddress?.id === addr.id ? 'border-accent shadow-2xl shadow-accent/5' : 'border-gray-50 hover:border-gray-200'
                          }`}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="flex justify-between items-center mb-8 relative z-10">
                          <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] ${addr.type === 'Home' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'}`}>
                            {addr.type} Location
                          </span>
                          {selectedAddress?.id === addr.id && <MdCheckCircle className="text-accent" size={24} />}
                        </div>
                        <div className="relative z-10">
                          <p className="font-black text-primary-dark text-2xl tracking-tight">{addr.name}</p>
                          <p className="text-sm text-gray-400 font-bold tracking-wide mt-1 mb-6">{addr.phone}</p>
                          <p className="text-gray-500 font-medium leading-relaxed pr-10 line-clamp-2">{addr.address}, {addr.city}</p>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => navigate('/profile')}
                      className="bg-white rounded-[40px] p-10 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-accent hover:border-accent/30 transition-all group min-h-[220px]"
                    >
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                        <MdAdd size={28} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest">Register New Address</span>
                    </button>
                  </div>

                  <div className="flex justify-between pt-10 border-t border-gray-100">
                    <button onClick={() => setCheckoutStep('cart')} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary-dark transition">
                      <MdChevronRight className="rotate-180" size={20} /> Back to Bag
                    </button>
                    <button
                      disabled={!selectedAddress}
                      onClick={() => setCheckoutStep('payment')}
                      className="px-12 py-5 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-primary-dark/20 hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Proceed to Secure Pay
                    </button>
                  </div>
                </motion.div>
              )}

              {checkoutStep === 'payment' && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div>
                    <h2 className="text-4xl font-black text-primary-dark tracking-tight">Secure Checkout</h2>
                    <p className="text-gray-400 font-medium text-sm mt-1">Select your preferred transaction protocol</p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { id: 'UPI', label: 'UPI / QR Protocol', desc: 'Instant verification via PhonePe, GPay, Paytm', icon: '⚡' },
                      { id: 'Card', label: 'Credit / Debit Matrix', desc: 'Secure encryption for Visa, Mastercard, AMEX', icon: '💳' },
                      { id: 'COD', label: 'Production Deposit (COD)', desc: 'Verification required upon delivery', icon: '📦' }
                    ].map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`group bg-white rounded-[40px] p-10 border-2 cursor-pointer transition-all duration-500 flex items-center gap-8 ${selectedPayment === method.id ? 'border-accent shadow-2xl shadow-accent/5' : 'border-gray-50 hover:border-gray-200'
                          }`}
                      >
                        <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center text-3xl shadow-sm border border-gray-50 ${selectedPayment === method.id ? 'bg-accent/10' : 'bg-gray-50'}`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-black text-primary-dark text-xl tracking-tight">{method.label}</p>
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-1">{method.desc}</p>
                        </div>
                        <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${selectedPayment === method.id ? 'border-accent bg-accent' : 'border-gray-100'}`}>
                          {selectedPayment === method.id && <MdCheckCircle className="text-white" size={20} />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-10 border-t border-gray-100">
                    <button onClick={() => setCheckoutStep('address')} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary-dark transition">
                      <MdChevronRight className="rotate-180" size={20} /> Back to Shipping
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="relative px-16 py-6 bg-primary-dark text-white rounded-[30px] font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-primary-dark/30 hover:bg-accent transition-all overflow-hidden flex items-center gap-4"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing Protocol...
                        </>
                      ) : (
                        <>Authorize Payment <MdCheckCircle size={22} /></>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sticky Summary Sidebar */}
          {checkoutStep !== 'success' && (
            <aside className="lg:w-[450px]">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white rounded-[48px] p-12 shadow-2xl shadow-black/[0.03] border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>

                  <h3 className="text-2xl font-black text-primary-dark tracking-tight mb-10 flex items-center gap-3">
                    <MdDescription className="text-accent" /> Order Summary
                  </h3>

                  <div className="space-y-6 mb-10">
                    <div className="flex justify-between">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base Subtotal</span>
                      <span className="font-black text-primary-dark">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Studio Logistics</span>
                      <span className="font-black text-primary-dark">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Compliance (GST 18%)</span>
                      <span className="font-black text-primary-dark">₹{gst}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-500">
                        <span className="text-[10px] font-black uppercase tracking-widest">Tier Discount</span>
                        <span className="font-black">-₹{discount}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-10 border-t-2 border-dashed border-gray-100 mb-12">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Authorized</p>
                        <p className="text-5xl font-black text-primary-dark tracking-tighter">₹{finalTotal}</p>
                      </div>
                      <span className="text-[9px] font-black text-accent bg-accent/10 px-4 py-2 rounded-full uppercase tracking-widest">V.I.P Locked</span>
                    </div>
                  </div>

                  {checkoutStep === 'cart' && (
                    <button
                      onClick={startCheckout}
                      disabled={cartItems.length === 0}
                      className="w-full py-7 bg-primary-dark text-white rounded-[28px] font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-primary-dark/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                    >
                      Initialize Deployment <MdChevronRight size={24} />
                    </button>
                  )}
                </div>

                <div className="bg-primary-dark rounded-[40px] p-10 text-white relative overflow-hidden group">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">Guarantee Protocol</p>
                    <h4 className="text-xl font-bold mb-4">Secure Customization Assurance</h4>
                    <p className="text-[11px] font-medium text-white/60 leading-relaxed uppercase tracking-wider">Every custom-engineered item undergoes a 12-point quality matrix before deployment.</p>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* --- ITEM INSPECTION MODAL (High-Fidelity Render) --- */}
      <AnimatePresence>
        {previewItem && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-primary-dark/70 backdrop-blur-md p-6" onClick={() => setPreviewItem(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[48px] w-full max-w-6xl max-h-[90vh] overflow-hidden relative flex flex-col lg:flex-row shadow-2xl shadow-black/50"
            >
              <button onClick={() => setPreviewItem(null)} className="absolute top-10 right-10 z-50 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition text-primary-dark shadow-sm">
                <MdClose size={28} />
              </button>

              {/* Rendering Area */}
              <div className="w-full lg:w-3/5 bg-[#f9f9f9] flex flex-col items-center justify-center p-16 relative">
                {(previewItem.selectedColor.imageB || previewItem.selectedColor.diaryImageOpen) && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 flex bg-white rounded-full shadow-2xl p-1.5 z-10 border border-gray-100">
                    <button
                      onClick={() => setPreviewView("front")}
                      className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition ${previewView === "front" ? "bg-primary-dark text-white shadow-lg" : "text-gray-400 hover:bg-gray-50"}`}
                    >
                      {previewItem.selectedColor.imageB ? "Front" : "Close"}
                    </button>
                    <button
                      onClick={() => setPreviewView("back")}
                      className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition ${previewView === "back" ? "bg-primary-dark text-white shadow-lg" : "text-gray-400 hover:bg-gray-50"}`}
                    >
                      {previewItem.selectedColor.diaryImageOpen ? "Open" : "Back"}
                    </button>
                  </div>
                )}

                <div className="relative w-full aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full max-w-lg">
                    <img
                      src={previewView === "front" ? (previewItem.frontImage || previewItem.mainImage) : (previewItem.backImage || previewItem.mainImage)}
                      className="absolute inset-0 w-full h-full object-contain"
                      style={
                        [1, 2, 3, 4, 6].includes(previewItem.id) && previewItem.selectedColor.name !== "white"
                          ? {
                            filter: previewItem.selectedColor.name === 'black'
                              ? (previewItem.id === 2 ? 'brightness(0.7) contrast(2.5) saturate(0)' : (previewItem.id === 4 ? 'brightness(0.8) contrast(1.3)' : 'brightness(0.6) contrast(1.6)'))
                              : ((previewItem.id === 5) ? 'invert(1) brightness(1.5) contrast(1.2)' :
                                (previewItem.id === 3 ? 'brightness(1.1) contrast(1.4) saturate(1.1)' :
                                  (previewItem.id === 2 ? 'brightness(0.9) contrast(1.2)' : 'brightness(0.85) contrast(1.3)'))),
                          }
                          : {}
                      }
                    />
                    {[1, 2, 3, 4, 6].includes(previewItem.id) && previewItem.selectedColor.name !== "white" && (
                      <div
                        className="absolute inset-0 mix-blend-multiply"
                        style={{
                          background: previewItem.selectedColor.name === 'black'
                            ? (previewItem.id === 4
                              ? 'linear-gradient(to right, #000 0%, #1a1a1a 15%, #2a2a2a 50%, #1a1a1a 85%, #000 100%), linear-gradient(to bottom, transparent 80%, #000 100%)'
                              : 'linear-gradient(to right, #0a0a0a 0%, #2a2a2a 20%, #3a3a3a 50%, #2a2a2a 80%, #0a0a0a 100%)')
                            : (previewItem.id === 3
                              ? `radial-gradient(circle at 50% 40%, ${previewItem.selectedColor.name} 0%, rgba(0,0,0,0.1) 100%)`
                              : (previewItem.id === 4
                                ? `linear-gradient(to right, rgba(0,0,0,0.2) 0%, ${previewItem.selectedColor.name} 20%, ${previewItem.selectedColor.name} 80%, rgba(0,0,0,0.2) 100%), linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.15) 100%)`
                                : previewItem.selectedColor.name)),
                          WebkitMaskImage: `url(${previewView === "front" ? (previewItem.frontImage || previewItem.mainImage) : (previewItem.backImage || previewItem.mainImage)})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${previewView === "front" ? (previewItem.frontImage || previewItem.mainImage) : (previewItem.backImage || previewItem.mainImage)})`,
                          maskSize: 'contain',
                        }}
                      />
                    )}

                    <div className="absolute z-10 pointer-events-none" style={{
                      top: getPrintableArea(previewItem.id, previewView).top,
                      left: getPrintableArea(previewItem.id, previewView).left,
                      right: getPrintableArea(previewItem.id, previewView).right,
                      bottom: getPrintableArea(previewItem.id, previewView).bottom
                    }}>
                      <div className="relative w-full h-full flex flex-col items-center justify-center">
                        {previewItem.designs[previewView].texts.map((t) => (
                          <p key={t.id} style={{
                            fontFamily: t.fontFamily,
                            fontSize: `${t.fontSize * 0.8}px`,
                            color: t.textColor,
                            rotate: `${t.textRotate}deg`,
                            position: 'absolute',
                            transform: `translate(${t.x * 0.8}px, ${t.y * 0.8}px)`,
                          }} className="font-bold text-center break-words p-2 drop-shadow-md w-max h-max max-w-full">
                            {t.text}
                          </p>
                        ))}
                        {previewItem.designs[previewView].logo && (
                          <img
                            src={previewItem.designs[previewView].logo}
                            style={{
                              width: `${previewItem.designs[previewView].logoSize * 0.8}px`,
                              rotate: `${previewItem.designs[previewView].logoRotate}deg`,
                              position: 'absolute',
                              transform: `translate(${previewItem.designs[previewView].logoX * 0.8}px, ${previewItem.designs[previewView].logoY * 0.8}px)`,
                            }}
                            className="object-contain drop-shadow-lg h-max max-w-full"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="w-full lg:w-2/5 p-16 flex flex-col justify-between bg-white">
                <div>
                  <h2 className="text-5xl font-black text-primary-dark leading-tight tracking-tight">{previewItem.name}</h2>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-6">Design Specification</p>

                  <div className="mt-16 space-y-12">
                    <div className="flex items-center gap-8">
                      <div className="w-20 h-20 rounded-3xl border-4 border-white shadow-2xl" style={{ backgroundColor: previewItem.selectedColor.name === 'silver' ? '#ccc' : (previewItem.selectedColor.name === 'black' ? '#222' : previewItem.selectedColor.name) }}></div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base Identity</p>
                        <p className="font-black text-primary-dark text-2xl capitalize mt-1">{previewItem.selectedColor.name}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Elements Deployed</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100">
                          <p className="text-xl font-black text-primary-dark">{previewItem.designs.front.texts.length + previewItem.designs.back.texts.length}</p>
                          <p className="text-[9px] font-bold text-gray-400 uppercase mt-1">Text Layers</p>
                        </div>
                        <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100">
                          <p className="text-xl font-black text-primary-dark">{(previewItem.designs.front.logo ? 1 : 0) + (previewItem.designs.back.logo ? 1 : 0)}</p>
                          <p className="text-[9px] font-bold text-gray-400 uppercase mt-1">Branding Assets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-gray-50">
                  <div className="flex justify-between items-end mb-10">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Unit Price</p>
                      <p className="text-4xl font-black text-accent mt-2">₹{previewItem.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">In Bag</p>
                      <p className="font-black text-primary-dark text-lg mt-1">{previewItem.quantity || 1} Unit(s)</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPreviewItem(null)}
                    className="w-full py-6 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] hover:bg-accent transition-all shadow-2xl shadow-primary-dark/30"
                  >
                    Close Inspection
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Cart;
