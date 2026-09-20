import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/icons/CartIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { navLinks } from "../../common/nav-links";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import Menu from "../Menu/Menu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const { getCartCount } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = getCartCount();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    signOut();
    setShowDropdown(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="logo">
            <img src={Logo} alt="NovaTech" className="logo-img" />
            <span className="logo-title">NovaTech</span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.href} end={link.href === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <Link to="/cart" className="cart-btn" aria-label={`Shopping cart, ${cartCount} items`}>
              <CartIcon />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>

            {user ? (
              <div className="user-profile-container">
                <button
                  className="user-avatar-btn"
                  type="button"
                  onClick={() => setShowDropdown((isOpen) => !isOpen)}
                  aria-label="User menu"
                  aria-expanded={showDropdown}
                >
                  <UserIcon />
                </button>
                {showDropdown && (
                  <div className="user-dropdown">
                    <button type="button" onClick={handleLogout} className="dropdown-item logout-btn">
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/signin" className="btn-ghost">
                  Sign In
                </Link>
                <Link to="/signup" className="btn-primary">
                  Sign Up
                </Link>
              </>
            )}

            <button
              type="button"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
