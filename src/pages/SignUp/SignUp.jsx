import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../SignIn/Auth.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({ ...currentForm, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      signUp(formData.name, formData.email, formData.password);
      navigate("/");
    } catch (signUpError) {
      setError(signUpError.message);
    }
  };

  return (
    <div className="auth-section">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-sub">Create a demo account to continue.</p>
        {error && <p className="form-error" role="alert">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Full Name<input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" placeholder="John Doe" required /></label>
          <label>Email Address<input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="example@gmail.com" required /></label>
          <label>Password<input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="new-password" placeholder="Create a password" minLength="6" required /></label>
          <label>Confirm Password<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} autoComplete="new-password" placeholder="Confirm your password" minLength="6" required /></label>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
