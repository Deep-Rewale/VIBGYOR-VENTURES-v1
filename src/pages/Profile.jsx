import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdDashboard,
  MdShoppingBag,
  MdLocationOn,
  MdSettings,
  MdLogout,
  MdChevronRight,
  MdCheckCircle,
  MdLocalShipping,
  MdHome,
  MdInventory,
  MdEmail,
  MdPhone,
  MdEdit,
  MdDelete,
  MdClose,
  MdAdd,
  MdCancel,
  MdHelpOutline,
  MdDescription,
  MdInfo
} from 'react-icons/md';

const Profile = () => {
  const { currentUser, logout, addAddress, deleteAddress, cancelOrder, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [previewView, setPreviewView] = useState("front");
  const [editingName, setEditingName] = useState(currentUser?.name || '');

  const handleUpdateName = () => {
    updateProfile({ name: editingName });
  };

  const [newAddress, setNewAddress] = useState({
    type: 'Home',
    name: currentUser?.name || '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    addAddress(newAddress);
    setIsAddressModalOpen(false);
    setNewAddress({
      type: 'Home',
      name: currentUser.name,
      phone: '',
      address: '',
      city: '',
      zip: ''
    });
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

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: MdDashboard },
    { id: 'orders', label: 'My Orders', icon: MdShoppingBag },
    { id: 'addresses', label: 'Addresses', icon: MdLocationOn },
    { id: 'settings', label: 'Settings', icon: MdSettings },
  ];

  const userOrders = currentUser.orders || [];
  const userAddresses = currentUser.addresses || [];
  const activeOrdersCount = userOrders.filter(o => o.status !== 'Delivered').length;

  const RenderHighFidelityThumb = ({ item, size = "small" }) => {
    const isColorable = [1, 2, 3, 4, 6].includes(item.id);
    const color = item.selectedColor;
    const baseImg = item.id === 6 ? (color?.PenImage || item.mainImage) : item.mainImage;

    return (
      <div className={`relative ${size === "small" ? "w-16 h-16" : "w-32 h-32"} bg-gray-50 rounded-2xl p-2 flex items-center justify-center`}>
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

  return (
    <section className="min-h-screen bg-[#fcfcfd] pt-32 pb-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex flex-col gap-6">
          <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-gray-200/20 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="p-1 rounded-full border-2 border-accent/20">
                  <img
                    src={currentUser.profilePic}
                    alt="Profile"
                    className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-2xl"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <h2 className="text-2xl font-black text-primary-dark tracking-tight">{currentUser.name}</h2>
              <p className="text-sm font-medium text-gray-400 mb-8">{currentUser.email}</p>

              <div className="w-full space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-4 px-6 py-5 rounded-[24px] font-black uppercase tracking-widest text-[10px] transition-all duration-500 ${activeTab === item.id
                        ? 'bg-primary-dark text-white shadow-2xl shadow-primary-dark/30 translate-x-2'
                        : 'text-gray-400 hover:bg-gray-50 hover:text-primary-dark'
                      }`}
                  >
                    <item.icon size={22} className={activeTab === item.id ? 'text-accent' : ''} />
                    <span>{item.label}</span>
                    {activeTab === item.id && <MdChevronRight className="ml-auto text-accent" size={20} />}
                  </button>
                ))}

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-4 px-6 py-5 rounded-[24px] font-black uppercase tracking-widest text-[10px] text-red-500 hover:bg-red-50 transition-all duration-300"
                  >
                    <MdLogout size={22} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-dark rounded-[40px] p-8 text-white relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-lg font-bold mb-4 relative z-10 flex items-center gap-2">
              <MdHelpOutline className="text-accent" /> Premium Support
            </h3>
            <p className="text-[11px] font-medium text-white/60 mb-8 leading-relaxed relative z-10 uppercase tracking-wider">Access priority assistance for your custom orders and logistics.</p>
            <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all backdrop-blur-md border border-white/10">
              Launch Live Chat
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Active Shipments', value: activeOrdersCount.toString().padStart(2, '0'), color: 'blue' },
                    { label: 'Studio Designs', value: userOrders.length.toString().padStart(2, '0'), color: 'orange' },
                    { label: 'Account Tier', value: 'Elite V.I.P', color: 'purple' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 group hover:border-accent/30 transition-all duration-500">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{stat.label}</p>
                      <h4 className="text-4xl font-black text-primary-dark tracking-tight">{stat.value}</h4>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-[40px] p-12 shadow-sm border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-accent to-primary-dark"></div>
                  <div className="flex justify-between items-center mb-12">
                    <div>
                      <h3 className="text-3xl font-black text-primary-dark tracking-tight">Recent Order</h3>
                      <p className="text-gray-400 text-sm font-medium mt-1">Status of your latest production</p>
                    </div>
                    <button className="px-6 py-3 bg-gray-50 rounded-xl text-[10px] font-black uppercase tracking-widest text-primary-dark hover:bg-gray-100 transition" onClick={() => setActiveTab('orders')}>Explore History</button>
                  </div>

                  {userOrders.length > 0 ? (
                    <div className="space-y-8">
                      {userOrders.slice(0, 1).map((order) => (
                        <div key={order.id} className="relative">
                          <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
                            <div className="flex items-center gap-6">
                              <RenderHighFidelityThumb item={order.items[0]} size="medium" />
                              <div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tracking Reference</span>
                                <p className="font-black text-primary-dark text-xl">{order.id}</p>
                                <p className="text-xs font-bold text-accent uppercase tracking-widest mt-1">₹{order.total} • {order.items.length} Product(s)</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <button
                                onClick={() => setActiveTab('orders')}
                                className="px-6 py-4 bg-primary-dark text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-primary-dark/10"
                              >
                                View Order Items
                              </button>
                              {order.status !== 'Delivered' && (
                                <button
                                  onClick={() => cancelOrder(order.id)}
                                  className="px-6 py-4 bg-red-50 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-100 transition"
                                >
                                  Void Order
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Professional Tracking Visualizer */}
                          <div className="bg-gray-50/50 rounded-[32px] p-10 border border-gray-100">
                            <div className="relative flex justify-between items-center px-10">
                              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0"></div>
                              <div
                                className="absolute top-1/2 left-0 h-[2px] bg-accent -translate-y-1/2 z-0 transition-all duration-1000"
                                style={{ width: `${(order.trackingStep / 3) * 100}%` }}
                              ></div>

                              {[MdInventory, MdLocalShipping, MdHome, MdCheckCircle].map((Icon, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center">
                                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-xl transition-all duration-500 ${i <= order.trackingStep ? 'bg-accent text-white scale-110 shadow-accent/20' : 'bg-gray-100 text-gray-300'
                                    }`}>
                                    <Icon size={20} />
                                  </div>
                                  <span className={`text-[9px] font-black mt-4 uppercase tracking-[0.1em] ${i <= order.trackingStep ? 'text-primary-dark' : 'text-gray-300'
                                    }`}>
                                    {['Production', 'Shipped', 'Out for Delivery', 'Received'][i]}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                      <MdShoppingBag className="mx-auto text-gray-300 mb-6 opacity-50" size={64} />
                      <h4 className="text-xl font-bold text-gray-400">Inventory is currently empty</h4>
                      <button onClick={() => navigate('/products')} className="mt-6 px-10 py-4 bg-primary-dark text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-primary-dark/20 hover:bg-accent transition-all">Start Your First Design</button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                      <MdDescription size={32} />
                    </div>
                    <div>
                      <h5 className="font-bold text-primary-dark">Billing & Invoices</h5>
                      <p className="text-xs font-medium text-gray-400">Download past order statements</p>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex items-center gap-6">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500">
                      <MdInfo size={32} />
                    </div>
                    <div>
                      <h5 className="font-bold text-primary-dark">Legal & Compliance</h5>
                      <p className="text-xs font-medium text-gray-400">Terms of Service and Data Policy</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-4xl font-black text-primary-dark tracking-tight">Order History</h3>
                    <p className="text-gray-400 font-medium text-sm mt-1">Detailed log of all your previous designs</p>
                  </div>
                  <span className="px-6 py-2 bg-gray-100 rounded-full text-[9px] font-black text-gray-400 uppercase tracking-widest">{userOrders.length} Completed Records</span>
                </div>

                {userOrders.length > 0 ? (
                  <div className="space-y-8">
                    {userOrders.map((order) => (
                      <div key={order.id} className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-700">
                        <div className="flex flex-wrap justify-between items-center gap-6 border-b border-gray-50 pb-10 mb-10">
                          <div className="flex gap-16">
                            <div>
                              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Order Date</p>
                              <p className="font-black text-primary-dark text-lg">{order.date}</p>
                            </div>
                            <div>
                              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Total Value</p>
                              <p className="font-black text-accent text-lg">₹{order.total}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                              }`}>
                              {order.status}
                            </span>
                            {order.status !== 'Delivered' && (
                              <button
                                onClick={() => cancelOrder(order.id)}
                                className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-100 transition-all"
                              >
                                <MdCancel size={22} />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                          <div className="space-y-8">
                            {order.items.map((item, i) => (
                              <div key={i} className="flex gap-6 items-center group">
                                <RenderHighFidelityThumb item={item} />
                                <div className="flex-1">
                                  <p className="font-black text-primary-dark text-lg leading-tight group-hover:text-accent transition-colors">{item.name}</p>
                                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-2 mb-4">Qty: {item.qty} • ₹{item.price}</p>
                                  <button
                                    onClick={() => { setPreviewItem(item); setPreviewView("front"); }}
                                    className="px-6 py-2.5 bg-gray-50 text-primary-dark border border-gray-100 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-primary-dark hover:text-white transition-all shadow-sm"
                                  >
                                    Inspect Design
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col justify-between">
                            <div className="bg-gray-50/50 rounded-[32px] p-8 mb-6 border border-gray-100">
                              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Destination</p>
                              <div className="flex items-start gap-4">
                                <MdLocationOn className="text-accent mt-1" size={20} />
                                <div>
                                  <p className="text-sm font-black text-primary-dark">{order.address?.name}</p>
                                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1 line-clamp-2">{order.address?.address}, {order.address?.city}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <button className="flex-1 py-4 bg-gray-50 text-primary-dark rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition flex items-center justify-center gap-2">
                                <MdDescription /> Get Invoice
                              </button>
                              <button className="flex-1 py-4 bg-gray-50 text-primary-dark rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition flex items-center justify-center gap-2">
                                <MdInfo /> Order Logs
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-32 bg-white rounded-[48px] border border-gray-100 shadow-sm">
                    <MdShoppingBag className="mx-auto text-gray-100 mb-8" size={120} />
                    <h4 className="text-3xl font-black text-primary-dark mb-4">No order history</h4>
                    <p className="text-gray-400 mb-12 max-w-sm mx-auto font-medium">You haven't customized any products yet. Let's change that and create something iconic!</p>
                    <button onClick={() => navigate('/products')} className="px-16 py-5 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] hover:scale-105 transition shadow-2xl shadow-primary-dark/20 hover:bg-accent">Browse Studio</button>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'addresses' && (
              <motion.div
                key="addresses"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-4xl font-black text-primary-dark tracking-tight">Saved Locations</h3>
                    <p className="text-gray-400 font-medium text-sm mt-1">Manage your delivery and billing coordinates</p>
                  </div>
                  <button
                    onClick={() => setIsAddressModalOpen(true)}
                    className="px-8 py-4 bg-primary-dark text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-primary-dark/30 hover:bg-accent transition-all flex items-center gap-2"
                  >
                    <MdAdd size={20} /> Add Coordinate
                  </button>
                </div>

                {userAddresses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {userAddresses.map((addr) => (
                      <div key={addr.id} className={`bg-white rounded-[40px] p-10 shadow-sm border-2 transition-all duration-500 ${addr.isDefault ? 'border-accent shadow-xl shadow-accent/5' : 'border-gray-50 hover:border-gray-200'}`}>
                        <div className="flex justify-between items-center mb-8">
                          <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] ${addr.type === 'Home' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'}`}>
                            {addr.type} Location
                          </span>
                          {addr.isDefault && <span className="text-[9px] font-black text-accent uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-lg">Preferred</span>}
                        </div>

                        <div className="space-y-4 mb-10">
                          <div>
                            <p className="font-black text-primary-dark text-2xl tracking-tight">{addr.name}</p>
                            <p className="text-sm text-gray-400 font-bold tracking-wide mt-1">{addr.phone}</p>
                          </div>
                          <p className="text-gray-500 font-medium leading-relaxed pr-10">
                            {addr.address},<br />
                            {addr.city} - {addr.zip}
                          </p>
                        </div>

                        <div className="flex gap-4 border-t border-gray-50 pt-8">
                          <button className="flex-1 py-4 bg-gray-50 text-primary-dark rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-100 transition flex items-center justify-center gap-2">
                            <MdEdit /> Update
                          </button>
                          <button
                            onClick={() => deleteAddress(addr.id)}
                            className="p-4 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                          >
                            <MdDelete size={22} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-32 bg-white rounded-[48px] border border-gray-100">
                    <MdLocationOn className="mx-auto text-gray-100 mb-8" size={120} />
                    <h4 className="text-2xl font-black text-primary-dark mb-4">No coordinates saved</h4>
                    <p className="text-gray-400 mb-12 max-w-sm mx-auto font-medium">Register a delivery location for faster, one-click production deployment.</p>
                    <button
                      onClick={() => setIsAddressModalOpen(true)}
                      className="px-12 py-5 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-primary-dark/20 hover:bg-accent transition-all"
                    >
                      New Address Entry
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-4xl font-black text-primary-dark tracking-tight">Security & Identity</h3>
                  <p className="text-gray-400 font-medium text-sm mt-1">Update your personal profile and account credentials</p>
                </div>

                <div className="bg-white rounded-[48px] p-12 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="relative group">
                      <img
                        src={currentUser.profilePic}
                        alt="Profile"
                        className="w-48 h-48 rounded-[60px] object-cover border-8 border-gray-50 shadow-2xl"
                      />
                      <button className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent text-black rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 transition-transform">
                        <MdEdit size={20} />
                      </button>
                    </div>

                    <div className="flex-1 space-y-10 w-full">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Current Protocol Alias</label>
                        <div className="flex gap-4">
                          <input
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            className="flex-1 px-8 py-5 bg-gray-50 border border-gray-100 rounded-[24px] font-bold text-primary-dark focus:ring-4 ring-accent/10 transition-all outline-none"
                            placeholder="Enter your new name"
                          />
                          <button
                            onClick={handleUpdateName}
                            className="px-10 py-5 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[10px] hover:bg-accent transition-all shadow-xl shadow-primary-dark/20"
                          >
                            Sync Changes
                          </button>
                        </div>
                      </div>

                      <div className="pt-10 border-t border-gray-50 space-y-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-black text-primary-dark text-lg">Email Credential</p>
                            <p className="text-sm text-gray-400 font-medium">{currentUser.email}</p>
                          </div>
                          <span className="px-5 py-2 bg-green-50 text-green-500 text-[9px] font-black uppercase tracking-widest rounded-xl">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-red-50 p-10 rounded-[40px] border border-red-100">
                    <h5 className="font-black text-red-900 text-xl mb-4">Danger Zone</h5>
                    <p className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-8">This action cannot be undone</p>
                    <button className="px-10 py-4 bg-white text-red-600 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-red-200 hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-red-500/5">Terminate Account</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

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
                          }} className="font-black text-center whitespace-nowrap drop-shadow-sm">
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
                            className="object-contain drop-shadow-md"
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
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Quantity</p>
                      <p className="font-black text-primary-dark text-lg mt-1">{previewItem.qty} Unit(s)</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPreviewItem(null)}
                    className="w-full py-6 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] hover:bg-accent transition-all shadow-2xl shadow-primary-dark/30"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* --- ADDRESS MODAL (Consistent UI) --- */}
        {isAddressModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-primary-dark/60 backdrop-blur-md p-4" onClick={() => setIsAddressModalOpen(false)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[48px] w-full max-w-xl p-12 shadow-2xl relative"
            >
              <button onClick={() => setIsAddressModalOpen(false)} className="absolute top-8 right-8 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition">
                <MdClose size={24} />
              </button>

              <h3 className="text-3xl font-black text-primary-dark mb-2 tracking-tight">New Coordinate</h3>
              <p className="text-gray-400 font-medium text-sm mb-10">Register a new delivery destination for your studio designs.</p>

              <form onSubmit={handleAddAddress} className="space-y-6">
                <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                  <button type="button" onClick={() => setNewAddress({ ...newAddress, type: 'Home' })} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition ${newAddress.type === 'Home' ? 'bg-white text-primary-dark shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>Home</button>
                  <button type="button" onClick={() => setNewAddress({ ...newAddress, type: 'Work' })} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition ${newAddress.type === 'Work' ? 'bg-white text-primary-dark shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>Work</button>
                </div>

                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" required value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} className="w-full px-6 py-5 bg-gray-50 rounded-[20px] border border-gray-100 outline-none focus:border-accent transition-all font-bold text-sm" />
                  <input type="tel" placeholder="Phone Number" required value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} className="w-full px-6 py-5 bg-gray-50 rounded-[20px] border border-gray-100 outline-none focus:border-accent transition-all font-bold text-sm" />
                  <textarea placeholder="Complete Address Details" required rows="3" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} className="w-full px-6 py-5 bg-gray-50 rounded-[20px] border border-gray-100 outline-none focus:border-accent transition-all font-bold text-sm resize-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" required value={newAddress.city} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} className="w-full px-6 py-5 bg-gray-50 rounded-[20px] border border-gray-100 outline-none focus:border-accent transition-all font-bold text-sm" />
                    <input type="text" placeholder="Zip Code" required value={newAddress.zip} onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })} className="w-full px-6 py-5 bg-gray-50 rounded-[20px] border border-gray-100 outline-none focus:border-accent transition-all font-bold text-sm" />
                  </div>
                </div>

                <button type="submit" className="w-full py-6 bg-primary-dark text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-primary-dark/20 hover:bg-accent transition-all mt-4">Save Deployment Location</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Profile;
