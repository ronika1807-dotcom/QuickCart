import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage({ cart, onUpdateQuantity, onRemoveItem }) {

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your cart is empty</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-page-content">

          {/* Cart Items */}
          {cart.map((item) => (
            <div key={item.id} className="cart-page-item">

              <img
                src={item.image}
                alt={item.name}
                className="cart-page-image"
              />

              <div className="cart-page-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

          {/* Total */}
          <div className="cart-page-summary">
            <h2>Total: ${calculateTotal()}</h2>

            <div className="cart-buttons">
              <Link to="/" className="continue-btn">
                Continue Shopping
              </Link>

              <button className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default CartPage;