import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Logement from './pages/Logement';
import Layout from './components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="*" element={<Layout><Error404 /></Layout>} />
      <Route path="/accommodation" element={<Layout><Logement /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;
