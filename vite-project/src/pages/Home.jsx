import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/productCard';
import Filters from '../components/Filters';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: 1000 });

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(res.data);
      setFiltered(res.data);
    });
    axios.get('https://fakestoreapi.com/products/categories').then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    let result = products.filter(p =>
      (!filters.category || p.category === filters.category) && p.price <= filters.price
    );
    setFiltered(result);
  }, [filters, products]);

  return (
    <div className="flex flex-col sm:flex-row">
      <Filters categories={categories} onFilterChange={(type, value) => setFilters(prev => ({ ...prev, [type]: value }))} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Home;