import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Registeration</h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3 position-relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={`form-control form-control-border-bottom ${errors.name ? "is-invalid" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
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

    <span
      className="input-group-text bg-transparent"
      style={{ cursor: "pointer" }}
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>

  {errors.password && (
    <div className="invalid-feedback d-block">{errors.password}</div>
  )}
</div>

              <div className="mb-3 position-relative">
  <div className="input-group">
    <input
      type={showConfirmPassword ? "text" : "password"}
      name="confirmPassword"
      placeholder="Confirm Password"
      className={`form-control form-control-border-bottom ${errors.confirmPassword ? "is-invalid" : ""}`}
      value={formData.confirmPassword}
      onChange={handleChange}
    />

    <span
      className="input-group-text bg-transparent"
      style={{ cursor: "pointer" }}
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>

  {errors.confirmPassword && (
    <div className="invalid-feedback d-block">{errors.confirmPassword}</div>
  )}
</div>


              <button type="submit" className="btn btn-primary w-100 mt-3 bannerbtn">
                Register
              </button>

              <p className="text-center mt-3 mb-0 formbottomtext">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
