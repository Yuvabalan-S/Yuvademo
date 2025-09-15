import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removefromcart } from '../assets/redux/cartSlice';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Addtocart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.user);
  const overallTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const handlePlaceOrder = async () => {
    if (!user) {
      alert('Please login');
      console.log('Please login');
      navigate('/login');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login, token missing');
      console.log('Please login, token missing');
      navigate('/login');
      return;
    }

    const orderData = {
      products: cartItems.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
      })),
      total: overallTotal,
      status: 'pending',
    };

    try {
      await axios.post('http://localhost:5005/api/order', orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Order placed successfully');
      console.log('Order placed successfully');
      setTimeout(() => {
        navigate('/order');
      }, 1000);
    } catch (error) {
      console.error('Order placement error:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border p-4 rounded shadow-sm"
            >
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p>Id: {item._id}</p>
                <p>Price: ₹{item.price}</p>
                <p>Total: ₹{item.totalPrice}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item._id))}
                  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  −
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item._id))}
                  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removefromcart(item._id))}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-semibold text-xl mt-6">
            Total Amount: ₹{overallTotal}
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Addtocart;
