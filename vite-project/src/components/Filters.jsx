import React from 'react';

const Filters = ({ categories, filters, onFilterChange }) => (
  <div className="space-y-6">
    {/* Category Filter */}
    <div>
      <label className="block font-semibold mb-1">Category</label>
      <select
        className="w-full border rounded px-3 py-2"
        value={filters.category}
        onChange={e => onFilterChange('category', e.target.value)}
      >
        <option value="">All</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>

    {/* Price Filter */}
    <div>
      <label className="block font-semibold mb-1">Max Price: ${filters.price}</label>
      <input
        type="range"
        min="0"
        max="1000"
        step="10"
        value={filters.price}
        className="w-full"
        onChange={e => onFilterChange('price', Number(e.target.value))}
      />
    </div>
  </div>
);

export default Filters;
    