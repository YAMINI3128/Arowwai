import { useState } from "react";
import headphone from "./assets/Images/headphone.webp";

function Products() {
  let [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Headphones",
      price: 1000,
      quantity: 0,
      image: headphone,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 2000,
      quantity: 0,
      image: headphone,
    },
    {
      id: 3,
      name: "Wireless Keyboard",
      price: 5000,
      quantity: 0,
      image: headphone,
    },
  ]);

  let increment = (id) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  let decrement = (id) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container mt-5">
        <div className="product-tittles mb-5">
            <h2 className="fw-bold mb-2">Related Products</h2>
             <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

        </div>
      <div className="row g-4 mb-5">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card shadow-lg border-0 p-3 h-100">
              <img
                src={product.image}
                className="card-img-top rounded"style={{ display: "flex" ,margin: "0 auto"}}
                alt={product.name}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">{product.name}</h5>
                <p className="text-primary">₹{product.price}</p>

                <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                  <button className="btn btn-outline-danger" onClick={() => decrement(product.id)}>−</button>
                  <span className="fw-bold">{product.quantity}</span>
                  <button className="btn btn-outline-success" onClick={() => increment(product.id)}>+</button>
                </div>

                <p className="fw-bold">Total: ₹{product.price * product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
