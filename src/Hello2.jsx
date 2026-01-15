import { useState } from 'react'
import './App.css'
import headphone from "./assets/Images/headphone.webp";



function App() {
  let [State, setState] = useState(0);
  let price = 1000;

  let increment = () => {
    setState(State + 1);
  };

  let decrement = () => {
    if (State > 0) {
      setState(State - 1);
    }
  };

  return (
 <div className="container mt-5  justify-content-center">
  <div className="card border-0 shadow-lg p-4"style={{ maxWidth: "300px", borderRadius: "16px" }}>
  
    <img src={headphone} style={{ width: "100px", height: "100px", display: "flex" ,margin: "0 auto"}}/>

    <div className="product-detail-card card-body text-center">
      <h4 className="card-title fw-bold mb-2">Premium Headphones</h4>
      <p className="text-muted mb-3">High quality sound experience</p>
      <h5 className="text-primary fw-semibold mb-4">₹{price}</h5>

      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <button className="btn btn-outline-danger rounded-circle"style={{ width: "40px", height: "40px" }}onClick={decrement}>−</button>
        <span className="fs-4 fw-bold">{State}</span>
        <button className="btn btn-outline-success rounded-circle"style={{ width: "40px", height: "40px" }}onClick={increment}>+</button>
      </div>

      <hr />
      <h5 className="fw-bold mb-3">Total: <span className="text-success">₹{price * State}</span></h5>

      <button className="btn btn-primary w-100 rounded-pill">Buy Now</button>
    </div>
  </div>
</div>

  );
}


export default App
