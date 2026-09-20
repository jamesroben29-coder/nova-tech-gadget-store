import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

const initialForm = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  zip: "",
  country: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
};

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, completeOrder } = useCart();
  const [form, setForm] = useState(initialForm);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    completeOrder();
    navigate("/thank-you");
  };

  if (cartItems.length === 0) {
    return (
      <section className="section">
        <div className="container empty-cart">
          <h1>Nothing to checkout</h1>
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn-primary">Browse Products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section checkout-section">
      <div className="container">
        <h1 className="section-title">Checkout</h1>
        <p className="section-subtitle">Complete your demo order securely and quickly.</p>

        <div className="checkout-layout">
          <div className="checkout-form-wrapper">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <fieldset>
                <legend>Billing Information</legend>
                <div className="form-row">
                  <label>
                    <span>Full Name</span>
                    <input name="fullName" value={form.fullName} onChange={handleChange} autoComplete="name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />
                  </label>
                </div>
                <label>
                  <span>Address</span>
                  <input name="address" value={form.address} onChange={handleChange} autoComplete="street-address" required />
                </label>
                <div className="form-row form-row-3">
                  <label>
                    <span>City</span>
                    <input name="city" value={form.city} onChange={handleChange} autoComplete="address-level2" required />
                  </label>
                  <label>
                    <span>ZIP / Postal</span>
                    <input name="zip" value={form.zip} onChange={handleChange} autoComplete="postal-code" required />
                  </label>
                  <label>
                    <span>Country</span>
                    <input name="country" value={form.country} onChange={handleChange} autoComplete="country-name" required />
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Payment Details</legend>
                <label>
                  <span>Cardholder Name</span>
                  <input name="cardName" value={form.cardName} onChange={handleChange} autoComplete="cc-name" required />
                </label>
                <label>
                  <span>Card Number</span>
                  <input name="cardNumber" value={form.cardNumber} onChange={handleChange} inputMode="numeric" autoComplete="cc-number" placeholder="1234 5678 9012 3456" required />
                </label>
                <div className="form-row">
                  <label>
                    <span>Expiry (MM/YY)</span>
                    <input name="expiry" value={form.expiry} onChange={handleChange} autoComplete="cc-exp" placeholder="12/27" required />
                  </label>
                  <label>
                    <span>CVC</span>
                    <input name="cvc" value={form.cvc} onChange={handleChange} inputMode="numeric" autoComplete="cc-csc" placeholder="123" required />
                  </label>
                </div>
              </fieldset>

              <button type="submit" className="btn-primary place-order">Place Demo Order - ${totalPrice.toFixed(2)}</button>
            </form>
          </div>

          <aside className="checkout-summary">
            <h2>Order Summary</h2>
            <ul className="summary-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div><h3>{item.title}</h3><span>Qty: {item.quantity}</span></div>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <div className="summary-row"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>Free</span></div>
            <div className="summary-row total"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
