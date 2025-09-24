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
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('Order placed successfully')
      console.log('Order placed successfully')
      setTimeout(() => {
        navigate('/order');
      }, 1000);
    } catch (error) {
      console.error('Order placement error', error)
    }
  }
  

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gradient-to-b from-gray-50 to-gray-200 rounded-2xl shadow-xl border border-gray-300">
  <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
    🛒 My Cart
  </h1>

  {cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty Cart"
        className="w-40 h-40 mb-6 opacity-80"
      />
      <p className="text-xl font-semibold text-gray-700 mb-3">
        Oops! Your cart looks empty.
      </p>
      <p className="text-gray-500 mb-6">
        Browse products and add your favorites to the cart!
      </p>
      <button
        onClick={() => navigate('/products')}
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
        text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 
        transition font-semibold shadow-lg"
      >
        🛍️ Shop Now
      </button>
    </div>
  ) : (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between 
          border border-gray-200 p-5 rounded-xl bg-white shadow-md hover:shadow-lg 
          transition transform hover:scale-[1.01]"
        >
          <div className="mb-4 sm:mb-0">
            <h2 className="font-bold text-xl text-gray-900">{item.name}</h2>
            <p className="text-sm text-gray-500">ID: {item._id}</p>
            <p className="text-gray-700 font-semibold mt-1">
              Price: <span className="text-green-600 font-bold">₹{item.price}</span>
            </p>
            <p className="text-gray-700 font-semibold">
              Total: <span className="text-indigo-600 font-bold">₹{item.totalPrice}</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(decreaseQuantity(item._id))}
              className="px-4 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition text-xl font-bold shadow-sm"
            >
              −
            </button>
            <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => dispatch(increaseQuantity(item._id))}
              className="px-4 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition text-xl font-bold shadow-sm"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(removefromcart(item._id))}
            className="mt-4 sm:mt-0 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 
            transition shadow-md font-medium"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-2xl mt-10 text-gray-900">
        Total Amount: <span className="text-indigo-700">₹{overallTotal}</span>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handlePlaceOrder}
          className="mt-8 w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
          text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition 
          font-bold shadow-lg transform hover:scale-[1.02]"
        >
          Place Order
        </button>
      </div>
    </div>
  )}
</div>
  )}

export default Addtocart;
