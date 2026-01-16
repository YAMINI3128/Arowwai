import React, { useState } from "react";
import OrderSuccessPopup from "./OrderSuccessPopup";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = 999;
  const shipping = 50;

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(100);
      alert("Coupon applied! ₹100 off");
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      <div className="container py-5 checkoutfields">
        <div className="row">
          <div className="row mb-4">
            <div className="col">
              <h2 className="fw-bold">Checkout</h2>
            </div>
          </div>
          <div className="col-md-7">

            <div className="card shadow p-4 mb-4">
              <h4 className="mb-3">Your Items</h4>

              <div className="d-flex align-items-center mb-3">
                <img
                  src="/mens1.jpg"
                  alt="Product"
                  className="img-fluid rounded"
                  style={{ width: "80px" }}
                />

                <div className="ms-3 flex-grow-1">
                  <h6 className="mb-1">Men Casual Shirt</h6>
                  <p className="mb-0 text-muted">Qty: 1</p>
                </div>

                <strong>₹999</strong>
              </div>

              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹999</span>
              </div>
            </div>

            <div className="card shadow p-4 mb-4">
              <h4 className="mb-3">Billing Address</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input className="form-control form-control-border-bottom" placeholder="Full Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control form-control-border-bottom" placeholder="Email" />
                </div>
                <div className="col-md-12 mb-3">
                  <input className="form-control form-control-border-bottom" placeholder="Address" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control form-control-border-bottom" placeholder="City" />
                </div>
                <div className="col-md-3 mb-3">
                  <input className="form-control form-control-border-bottom" placeholder="State" />
                </div>
                <div className="col-md-3 mb-3">
                  <input className="form-control form-control-border-bottom" placeholder="Zip" />
                </div>
              </div>

              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={sameAsBilling}
                  onChange={() => setSameAsBilling(!sameAsBilling)}
                />
                <label className="form-check-label">
                  Shipping address same as billing
                </label>
              </div>
            </div>

            {!sameAsBilling && (
              <div className="card shadow p-4 mb-4">
                <h4 className="mb-3">Shipping Address</h4>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input className="form-control form-control-border-bottom" placeholder="Full Name" />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input className="form-control form-control-border-bottom" placeholder="Address" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input className="form-control form-control-border-bottom" placeholder="City" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <input className="form-control form-control-border-bottom" placeholder="State" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <input className="form-control form-control-border-bottom" placeholder="Zip" />
                  </div>
                </div>
              </div>
            )}
          </div>

          
          <div className="col-md-5">
            <div className="card shadow p-4">

              
              <div className="mb-4">
                <h5>Have a Coupon?</h5>
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button className="btn btn-outline-primary" onClick={applyCoupon}>
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <small className="text-success mt-2 d-block">
                    Coupon applied! You saved ₹{discount}
                  </small>
                )}
              </div>

           
              <h4 className="mb-3">Payment</h4>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="form-check-label">Cash on Delivery</label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <label className="form-check-label">Credit / Debit Card</label>
              </div>

              {paymentMethod === "card" && (
                <>
                  <input className="form-control form-control-border-bottom mb-3" placeholder="Card Number" />
                  <div className="row">
                    <div className="col-6">
                      <input className="form-control form-control-border-bottom" placeholder="MM / YY" />
                    </div>
                    <div className="col-6">
                      <input className="form-control form-control-border-bottom" placeholder="CVV" />
                    </div>
                  </div>
                </>
              )}

              <hr />

            
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              {discount > 0 && (
                <div className="d-flex justify-content-between text-success">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              <hr />

              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>₹{subtotal + shipping - discount}</span>
              </div>

              <button className="btn btn-primary w-100 bannerbtn" onClick={handleSubmit}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <OrderSuccessPopup
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default Checkout;
