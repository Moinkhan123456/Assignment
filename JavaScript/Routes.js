// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';
// import Login from './Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<ContactUs />} />
      {/* <Route path="/login" element={<Login />} /> Add the login route */}
    </Routes>
  );
};

export default AppRoutes;
