import React from 'react';

const Filters = ({ categories, onFilterChange }) => (
  <aside className="w-full sm:w-1/4 p-4">
    <h2 className="font-bold mb-2">Filter</h2>
    <select onChange={(e) => onFilterChange('category', e.target.value)} className="w-full mb-2">
      <option value="">All Categories</option>
      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
    </select>
    <input
      type="range"
      min="0"
      max="1000"
      onChange={(e) => onFilterChange('price', e.target.value)}
      className="w-full"
    />
    <p>Max Price: $1000</p>
  </aside>
);

export default Filters;