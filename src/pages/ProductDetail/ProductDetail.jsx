import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="section container pdp-not-found">
        <h1 className="section-title">Product Not Found</h1>
        <p className="section-subtitle">The item you are looking for does not exist or has been removed.</p>
        <Link to="/shop" className="pdp-btn primary-btn-color">Back to Shop</Link>
      </section>
    );
  }

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <section className="section container">
      <nav className="pdp-breadcrumb" aria-label="Breadcrumb">
        <Link to="/shop" className="shop-link-text">Products</Link>
        <span className="pdp-breadcrumb-separator">/</span>
        <span className="pdp-breadcrumb-current">{product.category}</span>
      </nav>

      <div className="pdp-layout">
        <div className="pdp-media-col">
          <div className="pdp-image-wrapper">
            <img src={product.image} alt={product.title} className="pdp-main-img" />
            <span className="pdp-badge">{product.category}</span>
          </div>
        </div>

        <div className="pdp-info-col">
          <h1 className="pdp-title">{product.title}</h1>
          <div className="pdp-rating-row">
            <span className="pdp-star">★</span>
            <span className="pdp-rating-val">{product.rating}</span>
            <span className="pdp-rating-count">(128 reviews)</span>
          </div>
          <div className="pdp-price">${product.price.toFixed(2)}</div>
          <p className="pdp-description">{product.description}</p>

          <div className="pdp-action-group">
            <button className="pdp-btn primary-btn-color pdp-btn-lg" type="button" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="pdp-btn pdp-btn-secondary pdp-btn-lg" type="button" onClick={handleBuyNow}>Buy Now</button>
          </div>

          <div className="pdp-features">
            <div className="pdp-feature-card">
              <span className="pdp-feature-icon" aria-hidden="true">Delivery</span>
              <div><strong className="pdp-feature-title">Free Express Delivery</strong><p className="pdp-feature-text">In stock, ships within 24 hours</p></div>
            </div>
            <div className="pdp-feature-card">
              <span className="pdp-feature-icon" aria-hidden="true">Warranty</span>
              <div><strong className="pdp-feature-title">1 Year Warranty</strong><p className="pdp-feature-text">Full coverage manufacturer protection</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
