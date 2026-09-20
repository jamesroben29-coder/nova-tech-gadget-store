import React from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import ThankYou from "./pages/ThankYou/ThankYou.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";

const App = () => {
  return (

    <AuthProvider>
      <CartProvider>
        <div className="app">
            <Navbar /> 
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/shop/:id" element={<ProductDetail/>}/>
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
          <Footer/>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

