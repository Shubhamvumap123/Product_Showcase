import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 border-b pb-4">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">
            Your cart is empty.{' '}
            <Link to="/" className="text-blue-600 font-medium hover:underline">Continue shopping</Link>
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain border rounded p-2 bg-gray-100"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-blue-600 font-medium">${item.price.toFixed(2)}</p>
                    <p className="text-yellow-500 text-sm">Rating: {item.rating?.rate || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded px-2">
                    <span className="text-sm text-gray-600">Qty:</span>
                    <span className="ml-2 font-medium">{item.quantity}</span>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)} // ✅ connect remove handler
                    className="text-red-500 hover:text-red-700 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8 border-t pt-4">
              <h3 className="text-xl font-semibold">Total:</h3>
              <p className="text-2xl text-green-600 font-bold">${total.toFixed(2)}</p>
            </div>

            <div className="text-right">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
