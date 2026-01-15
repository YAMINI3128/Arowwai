import React from "react";

const Cart = () => {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold">Your Cart</h2>
          <p className="text-muted">Review your selected items</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm mb-3">
            <div className="card-body d-flex align-items-center gap-3">
              <img
                src="/mens1.jpg"
                alt="Product"
                className="cart-img"
              />

              <div className="flex-grow-1">
                <h6 className="mb-1">Men’s Casual Shirt</h6>
                <p className="mb-1 text-muted">₹999</p>

                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-outline-secondary">−</button>
                  <span>1</span>
                  <button className="btn btn-sm btn-outline-secondary">+</button>
                </div>
              </div>

              <button className="btn btn-sm btn-outline-danger ">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹999</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>₹50</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>₹1049</span>
              </div>

              <button className="btn btn-primary w-100 bannerbtn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
