import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/CartIcon";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems, clearCart } = useCart();

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button className="clear-btn" type="button" onClick={clearCart}>
            Clear cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon"><CartIcon /></div>
          <h2>Your cart is empty</h2>
          <p>Looks like you have not added anything to your cart yet.</p>
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                  <span className="cart-item-cat">{item.category}</span>
                  <span className="cart-item-price">${item.price.toFixed(2)}</span>
                </div>
                <div className="cart-item-actions">
                  <div className="qty" aria-label={`Quantity for ${item.title}`}>
                    <button type="button" onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.title} quantity`}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.title} quantity`}>+</button>
                  </div>
                  <span className="line-total">${(item.price * item.quantity).toFixed(2)}</span>
                  <button type="button" className="remove" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>Free</span></div>
            <div className="summary-row total"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
            <Link to="/shop" className="continue-link">Continue Shopping</Link>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Cart;
