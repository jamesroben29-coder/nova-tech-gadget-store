import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  const orderNumber = useMemo(() => `NT-${Math.floor(100000 + Math.random() * 900000)}`, []);

  return (
    <section className="section thank-you-section">
      <div className="container thank-you">
        <div className="check-circle" aria-hidden="true">✓</div>
        <h1>Thank you for your order!</h1>
        <p className="thank-sub">Your demo order has been recorded successfully.</p>

        <div className="order-info">
          <div><span>Order Number</span><strong>{orderNumber}</strong></div>
          <div><span>Estimated Delivery</span><strong>3-5 business days</strong></div>
          <div><span>Shipping</span><strong>Free</strong></div>
        </div>

        <div className="thank-actions">
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          <Link to="/" className="btn-ghost">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
