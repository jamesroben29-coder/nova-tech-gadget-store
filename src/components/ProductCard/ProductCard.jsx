import StarIcon from "../../assets/icons/StarIcon";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 

const ProductCard = ({product}) => {

  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/shop/${product.id}`} className="product-card-link" aria-label={`View ${product.title}`}>

      <div className="product-image-wrap">
          <img src={product.image} alt={product.title} />
      </div>

      <div className="product-body">
          <span className="product-category">{product.category}</span>
          <h3 className="product-title">{product.title}</h3>
          <div className="product-rating">
            <StarIcon className="star-icon-card"/> {product.rating}
          </div>
      </div>

      </Link>
      <div className="product-footer">
        <span className="product-price">${product.price.toFixed(2)}</span>
        <button className="add-btn" type="button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
  
};

export default ProductCard;
