// src/components/Cart.js
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // Calculate total price
  const { cart: cartItems, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleBackToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <>
                <p>Your cart is empty.</p>
                <button
                  onClick={handleBackToProducts}
                  className="text-lg mt-5 p-2 rounded-md bg-gray-300 text-gray-800 hover:text-gray-300 hover:bg-gray-800 w-auto cursor-pointer"
                >
                  View Products
                </button>
              </>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-100 rounded-lg p-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-40 object-cover object-center mb-4"
                    />
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-gray-600">${item.price}</span>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {cartItems.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Total: ${total}</h3>
                <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
};

export default Cart;
