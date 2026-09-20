import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";
import "./Footer.css";

const Footer = () => {
  const { user, signOut } = useAuth();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={Logo} alt="NovaTech" className="logo-img" />
            <span>NovaTech</span>
          </Link>
          <div className="footer-text">
            <p>Premium tech gadgets for creators, gamers and everyday explorers.</p>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Account</h4>
          <ul>
            {user ? (
              <li><button type="button" className="footer-signout" onClick={signOut}>Sign Out</button></li>
            ) : (
              <>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 NovaTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
