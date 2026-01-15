import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 mt-5 myfooter">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-3 col-sm-6 mb-4">
             <Link to="/" className="navbar-brand">
          <img
            src="/logo.png" 
            alt="Logo"
            className="d-inline-block align-text-top logoimg"
          />
        </Link>
          
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="nav-link active">Home</Link></li>
              <li><a href="#" className="text-dark text-decoration-none">Mens Wear</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Womens Wear</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Kids Wear</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li> <Link to="/login" className="text-dark text-decoration-none "> Login</Link></li>
              <li><Link to="/register" className="text-dark text-decoration-none ">Register</Link></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-dark text-decoration-none">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">Contact</h5>
            <p className="mb-1">📍 Indore, India</p>
            <p className="mb-1">📞 +91 98765 43210</p>
            <p>✉️ support@arowwai.com</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-dark">
          © {new Date().getFullYear()} Arowwai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
