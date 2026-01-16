import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";


const SingleProduct = () => {
  const images = [
    "/mens1.jpg",
    "/mens2.jpg",
    "/mens1.jpg",
    "/mens2.jpg",
  ];
const relatedProducts = [
  { id: 1, name: "Men Shirt", price: "₹799", image: "/mens1.jpg" },
  { id: 2, name: "Casual T-Shirt", price: "₹699", image: "/mens2.jpg" },
  { id: 3, name: "Formal Shirt", price: "₹999", image: "/mens1.jpg" },
  { id: 4, name: "Denim Shirt", price: "₹1099", image: "/mens2.jpg" },
  { id: 5, name: "Printed Shirt", price: "₹899", image: "/mens1.jpg" },
];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">

          <div className="mb-3 border rounded p-3 text-center">
            <img
              src={mainImage}
              alt="Product"
              className="img-fluid"
            />
          </div>
          <div className="row g-2">
            {images.map((img, index) => (
              <div className="col-3" key={index}>
                <img
                  src={img}
                  alt="Gallery"
                  className={`img-fluid rounded border ${
                    mainImage === img ? "border-primary" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setMainImage(img)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">

          <h2 className="fw-bold">Men Casual Shirt</h2>
          <p className="text-muted mb-2">
            Premium cotton slim fit shirt
          </p>

          <p className="mb-1">
            <strong>Category:</strong> Men Clothing
          </p>
          <p className="mb-1">
            <strong>Brand:</strong> Arrow
          </p>

          <h3 className="text-primary my-3">₹999</h3>

          <p className="text-muted">
            This premium cotton casual shirt offers all-day comfort
            with a stylish slim fit. Perfect for office and casual wear.
          </p>

          {/* Quantity */}
          <div className="d-flex align-items-center mb-4">
            <span className="me-3 fw-bold">Quantity:</span>
            <input
              type="number"
              className="form-control w-25"
              min="1"
              defaultValue="1"
            />
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn btn-primary px-4 bannerbtn">
              Add to Cart
            </button>
            
          </div>
          {/* Social Share */}
<div className="mt-4">
  <span className="fw-bold me-3">Share:</span>

  <a
    href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://twitter.com/intent/tweet?url=https://yourwebsite.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon twitter"
  >
    <FaTwitter />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://wa.me/?text=Check%20out%20this%20product%20https://yourwebsite.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon whatsapp"
  >
    <FaWhatsapp />
  </a>
</div>


        </div>
      </div>
      {/* RELATED PRODUCTS */}
<div className="mt-5">
  <h4 className="fw-bold mb-4">Related Products</h4>

  <div className="row g-3">

    {relatedProducts.map((product) => (
      <div className="col" key={product.id} style={{ maxWidth: "20%" }}>
        <div className="card h-100 shadow-sm">

          <img
            src={product.image}
            className="card-img-top men-img"
            alt={product.name}
          />

          <div className="card-body text-center">
            <h6 className="mb-1">{product.name}</h6>
            <p className="fw-bold mb-2">{product.price}</p>

            <button className="btn btn-outline btn-sm w-100 addcartbtn">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    ))}

  </div>
</div>

    </div>
    
  );
};

export default SingleProduct;
