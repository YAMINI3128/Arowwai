import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

/* Mens Products */
const mensProducts = [
  { id: 1, name: "Men T-Shirt", price: "₹799", image: "/mens1.jpg" },
  { id: 2, name: "Casual Shirt", price: "₹1,299", image: "/mens2.jpg" },
  { id: 3, name: "Denim Jeans", price: "₹1,999", image: "/mens1.jpg" },
  { id: 4, name: "Hoodie", price: "₹1,499", image: "/mens2.jpg" },
];

/* Womens Products */
const womensProducts = [
  { id: 1, name: "Women Kurti", price: "₹1,099", image: "/womens1.jpg" },
  { id: 2, name: "Floral Dress", price: "₹1,799", image: "/womens2.jpg" },
  { id: 3, name: "Women Top", price: "₹899", image: "/womens1.jpg" },
  { id: 4, name: "Women Jeans", price: "₹1,599", image: "/womens2.jpg" },
];

/* Kids Products */
const kidsProducts = [
  { id: 1, name: "Kids T-Shirt", price: "₹499", image: "/kids1.jpg" },
  { id: 2, name: "Kids Shorts", price: "₹699", image: "/kids2.jpg" },
  { id: 3, name: "Kids Dress", price: "₹899", image: "/kids1.jpg" },
  { id: 4, name: "Kids Jacket", price: "₹1,199", image: "/kids2.jpg" },
];

const Home = () => {
  return (
    <>
    
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="hero-content text-white">
          <h1 className="display-4 fw-bold">New Fashion Collection</h1>
          <p className="lead my-3">
            Discover the latest trends for Men, Women & Kids
          </p>
          <button className="btn btn-primary btn-lg bannerbtn">
            Shop Now
          </button>
        </div>
      </section>

     
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Men’s Collection</h2>
          <div className="row g-4">
            {mensProducts.map((product) => (
              <div className="col-12 col-sm-6 col-md-3" key={product.id}>
                <div className="card h-100 shadow-sm">
  
  <Link to={`/product/${product.id}`}>
    <img
      src={product.image}
      className="card-img-top men-img"
      alt={product.name}
      style={{ cursor: "pointer" }}
    />
  </Link>

  <div className="card-body text-center">
   
    <Link
      to={`/product/${product.id}`}
      className="text-decoration-none text-dark"
    >
      <h6>{product.name}</h6>
    </Link>

    <p className="fw-bold">{product.price}</p>

    <button className="btn btn-outline btn-sm w-100 addcartbtn">
      Add to Cart
    </button>

  </div>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Women’s Collection</h2>
          <div className="row g-4">
            {womensProducts.map((product) => (
              <div className="col-12 col-sm-6 col-md-3" key={product.id}>
                <div className="card shadow-sm">
                  <img src={product.image} className="card-img-top womens-img" alt={product.name} />
                  <div className="card-body text-center">
                    <h6>{product.name}</h6>
                    <p className="fw-bold">{product.price}</p>
                    <button className="btn btn-outline btn-sm w-100 addcartbtn">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Kids Collection</h2>
          <div className="row g-4">
            {kidsProducts.map((product) => (
              <div className="col-12 col-sm-6 col-md-3" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img src={product.image} className="card-img-top kid-img" alt={product.name} />
                  <div className="card-body text-center">
                    <h6>{product.name}</h6>
                    <p className="fw-bold">{product.price}</p>
                    <button className="btn btn-outline btn-sm w-100 addcartbtn">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
