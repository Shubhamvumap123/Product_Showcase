import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/productCard';
import Filters from '../components/Filters';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: 1000 });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(res.data);
      setFiltered(res.data);
    });
    axios.get('https://fakestoreapi.com/products/categories').then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    const result = products.filter(
      p =>
        (!filters.category || p.category === filters.category) &&
        p.price <= filters.price
    );
    setFiltered(result);
    setCurrentPage(1); // reset to first page on filter change
  }, [filters, products]);

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Filters Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-4 shadow-lg">
  <Filters
  categories={categories}
  filters={filters} // <- pass filters here
  onFilterChange={(type, value) =>
    setFilters(prev => ({ ...prev, [type]: value }))
  }
/>

      </div>

      {/* Product Grid */}
      <div className="w-full lg:w-3/4 p-6">
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-lg">No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded border ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
