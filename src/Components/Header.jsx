import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg topheadbar">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand">
          <img
            src="/logo.png" 
            alt="Logo"
            className="d-inline-block align-text-top logoimg"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mens Wear</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Womens Wear</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kids Wear</a>
            </li>
          <li className="nav-item position-relative">
            <Link to="/cart" className="nav-link">
              <FaShoppingCart size={18} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </Link>
          </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-light btn-sm addcartbtn">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm addcartbtn">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
