import MenuSidebar from "./components/MenuSidebar";
import React from 'react';
import './assets/css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Peoples from './pages/Peoples.jsx';
import Reports from './pages/Reports.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <MenuSidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/peoples" element={<Peoples />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </MenuSidebar>
    </BrowserRouter>
    </div>
  );
}

export default App;
