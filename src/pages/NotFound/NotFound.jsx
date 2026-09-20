import { Link } from "react-router-dom";
import NotFoundIcon from "../../assets/icons/NotFoundIcon";
import "./NotFound.css";

const NotFound = () => (
  <section className="section not-found-section">
    <div className="container not-found">
      <div className="not-found-panel" aria-labelledby="not-found-title">
        <div className="not-found-icon" aria-hidden="true"><NotFoundIcon /></div>
        <p className="not-found-code">404</p>
        <h1 id="not-found-title">Page not found</h1>
        <p className="not-found-description">The NovaTech gadget page you are looking for is unavailable or has been moved. Return home or continue browsing the latest gear.</p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">Back to Home</Link>
          <Link to="/shop" className="not-found-secondary">Browse Gadgets</Link>
        </div>
      </div>
    </div>
  </section>
);

export default NotFound;
