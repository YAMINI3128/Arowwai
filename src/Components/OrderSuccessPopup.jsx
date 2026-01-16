import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccessPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="order-success-overlay">
      <div className="order-success-popup text-center">
        <FaCheckCircle size={70} className="text-success mb-3" />

        <h3 className="fw-bold">Order Placed Successfully!</h3>
        <p className="text-muted mb-4">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-primary bannerbtn">
            Continue Shopping
          </Link>
          <button className="btn btn-outline-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPopup;
