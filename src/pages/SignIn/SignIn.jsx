import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Auth.css";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({ ...currentForm, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      signIn(formData.email, formData.password);
      navigate("/");
    } catch (signInError) {
      setError(signInError.message);
    }
  };

  return (
    <div className="auth-section">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-sub">Sign in to your demo account to continue.</p>
        {error && <p className="form-error" role="alert">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email Address<input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="example@gmail.com" required /></label>
          <label>Password<input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="current-password" placeholder="Enter your password" required /></label>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
        <p className="auth-switch">Do not have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
