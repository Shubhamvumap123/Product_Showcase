import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Link
    to={`/product/${product.id}`}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
  >
    <div className="relative h-56 bg-gray-50 flex items-center justify-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div className="p-4 flex flex-col flex-1 justify-between">
      <h3 className="font-medium text-sm text-gray-800 line-clamp-2 mb-2">
        {product.title}
      </h3>

      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-blue-600">${product.price.toFixed(2)}</p>
        <p className="text-yellow-500 text-sm font-medium">
          ⭐ {product.rating?.rate ?? 'N/A'}
        </p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
