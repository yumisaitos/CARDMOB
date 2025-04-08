import { useState, useEffect } from 'react';
import './App.css'

import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;