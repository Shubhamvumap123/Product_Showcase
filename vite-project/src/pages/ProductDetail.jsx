// ProductDetail.jsx
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

  if (!product) return <p>Loading...</p>;

  const handleClick = () => {
    onAddToCart(product); // <- pass data back
    navigate('/cart');    // <- navigate to cart
  };

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="h-60 mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-blue-600 text-xl">${product.price}</p>
      <p className="text-yellow-500">Rating: {product.rating?.rate}</p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
