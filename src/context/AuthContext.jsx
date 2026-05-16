import React, { createContext, useState, useEffect, useContext } from 'react';
import { users as initialUsers } from '../data/user';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const signup = (email, password) => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return login(email, password);
    }
    const newUser = {
      id: Date.now(),
      email,
      password,
      name: email.split('@')[0],
      profilePic: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=5a4be7&color=fff`,
      orders: [],
      addresses: []
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const addOrder = (order) => {
    if (!currentUser) return;
    
    const newOrder = {
      ...order,
      id: `ORD-${Math.floor(Math.random() * 90000) + 10000}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Processing',
      trackingStep: 0
    };

    const updatedUser = {
      ...currentUser,
      orders: [newOrder, ...(currentUser.orders || [])]
    };

    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const updatedUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    setUsers(updatedUsers);
  };

  const addAddress = (address) => {
    if (!currentUser) return;

    const newAddress = {
      ...address,
      id: Date.now(),
      isDefault: (currentUser.addresses || []).length === 0
    };

    const updatedUser = {
      ...currentUser,
      addresses: [...(currentUser.addresses || []), newAddress]
    };

    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const updatedUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    setUsers(updatedUsers);
  };

  const deleteAddress = (addressId) => {
    if (!currentUser) return;

    const updatedAddresses = currentUser.addresses.filter(a => a.id !== addressId);
    const updatedUser = {
      ...currentUser,
      addresses: updatedAddresses
    };

    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const updatedUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    setUsers(updatedUsers);
  };

  const updateProfile = (updatedData) => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      ...updatedData
    };

    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const updatedUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    setUsers(updatedUsers);
  };

  const cancelOrder = (orderId) => {
    if (!currentUser) return;

    const updatedOrders = currentUser.orders.filter(o => o.id !== orderId);
    const updatedUser = {
      ...currentUser,
      orders: updatedOrders
    };

    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const updatedUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    setUsers(updatedUsers);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout, addOrder, addAddress, deleteAddress, cancelOrder, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

