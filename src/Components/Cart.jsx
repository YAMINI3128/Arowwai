import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const getPriceNumber = (price) => {
    return Number(price.replace(/[^0-9]/g, ""));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + getPriceNumber(item.price) * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty 🛒</h4>
          <Link to="/" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div className="card shadow-sm mb-3" key={item.id}>
                <div className="card-body d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-img"
                  />

                  <div className="flex-grow-1">
                    <h6>{item.name}</h6>
                    <p className="text-muted">{item.price}</p>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Order Summary</h5>

                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;