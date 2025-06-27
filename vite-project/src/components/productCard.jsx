import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="border p-4 rounded shadow hover:shadow-lg">
    <img src={product.image} alt={product.title} className="h-40 object-contain w-full" />
    <h2 className="font-semibold mt-2">{product.title}</h2>
    <p className="text-blue-600">${product.price}</p>
    <p className="text-yellow-500">Rating: {product.rating?.rate || 'N/A'}</p>
  </Link>
);

export default ProductCard;