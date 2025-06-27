import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, onQuantityChange, onRemove }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. <Link to="/" className="text-blue-500 underline">Continue Shopping</Link></p>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border rounded p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-blue-600">${item.price.toFixed(2)}</p>
                  <p className="text-yellow-500">Rating: {item.rating?.rate || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onQuantityChange(item.id, Number(e.target.value))}
                  className="w-16 text-center border rounded"
                />
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-semibold mt-4">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <div className="text-right">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
