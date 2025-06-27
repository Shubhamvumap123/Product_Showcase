import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-lg text-gray-500">
        Loading product details...
      </div>
    );
  }

  const handleClick = () => {
    onAddToCart(product);
    navigate('/cart');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row gap-6 p-6 hover:shadow-lg transition">
        <div className="flex-shrink-0 flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-blue-600 text-xl font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-yellow-500 mt-1 text-sm">⭐ {product.rating?.rate || 'N/A'} / 5</p>
          </div>

          <button
            onClick={handleClick}
            className="mt-6 w-full md:w-fit bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-md font-medium transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
