// CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600">Go shopping</Link></p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border p-4 mb-2 rounded">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>${item.price} × {item.quantity}</p>
              </div>
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-4">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
