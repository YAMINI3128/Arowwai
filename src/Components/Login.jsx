import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Login</h3>

            <form onSubmit={handleSubmit} noValidate>

             
              <div className="mb-3 position-relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`form-control form-control-border-bottom ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3 position-relative">
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={`form-control form-control-border-bottom ${errors.password ? "is-invalid" : ""}`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <div className="invalid-feedback d-block">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3 bannerbtn">
                Login
              </button>

              <p className="text-center mt-3 mb-0 formbottomtext">
                Don’t have an account? <Link to="/register">Register</Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
