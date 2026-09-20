import { useState } from "react";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({ ...currentForm, [name]: value }));
    setIsSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(initialForm);
    setIsSent(true);
  };

  return (
    <section className="section">
      <div className="container">
        <header className="contact-header">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">Questions, feedback or partnerships - we would love to hear from you.</p>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card"><h2>Visit Us</h2><p>123 Tech Avenue<br />Stockholm, Sweden</p></div>
            <div className="info-card"><h2>Email</h2><p>hello@novatech.store<br />support@novatech.store</p></div>
            <div className="info-card"><h2>Call</h2><p>+46 (0) 8 123 456 78<br />Mon-Fri, 9am-6pm CET</p></div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {isSent && <p className="form-success" role="status">Thanks! Your message has been received.</p>}
            <label><span>Full name</span><input name="name" type="text" value={formData.name} onChange={handleChange} autoComplete="name" placeholder="Jane Doe" required /></label>
            <label><span>Email</span><input name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="you@example.com" required /></label>
            <label><span>Message</span><textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="How can we help?" required /></label>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
