import React from "react";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import "./Home.css";
import { products, categories } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const Home = () => {

  const featureProducts = products.slice(0, 4);
  const newArrivalProducts = products.slice(4, 8);

  const previewCategories = categories.slice(0, 4);

  return (
    <>
      <Hero />

        <section className="section">
            <div className="container">
                <div className="section-head">
                      <div>
                          <h2 className="section-title">Feature Products</h2>
                          <p className="section-subtitle">Hand-picked best sellers this week</p>
                      </div>
                      <Link to="/shop" className="link-accent">
                          View All <ArrowRightIcon/>{""}
                      </Link>
                </div>
                <div className="grid-products">
                    {
                      featureProducts.map((product) => 
                        
                            <ProductCard key={product.id} product={product}/>
                        
                      )
                    }
                </div>
            </div>
        </section>

        <section className="section">
                <div className="container">
                    <div className="section-head">
                        <div>
                            <h2 className="section-title">Shop by Category</h2>
                            <p className="section-subtitle">
                                Find Exactly what are you looking for.
                            </p>
                        </div>
                        <Link to="/categories" className="link-accent">
                            <ArrowRightIcon/>
                        </Link>
                    </div>

                    <div className="grid-categories-preview">
                        {previewCategories.map((category) => (
                            <CategoryCard key={category.id} category={category}/>
                        ))}
                    </div>
                </div>
        </section>

        
        <section className="section">
            <div className="container">
            <div className="promo-banner">
                <div className="promo-text">
                <span className="hero-badge">
                    <span className="dot" /> Limited Time
                </span>
                <h2>
                    Save up to <span className="text-accent">40%</span> on Gaming
                    Gear
                </h2>
                <p>Upgrade your setup with our biggest sale of the season.</p>
                <Link to="/shop?category=gaming" className="btn-primary">
                    Shop Gaming
                </Link>
                </div>
                <div className="promo-image">
                <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900"
                    alt="Gaming setup promotional banner"
                />
                </div>
            </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="section-head">
                      <div>
                          <h2 className="section-title">New Arrival Products</h2>
                          <p className="section-subtitle">Hand-picked best sellers this week</p>
                      </div>
                      <Link to="/shop" className="link-accent">
                          View All <ArrowRightIcon/>{""}
                      </Link>
                </div>
                <div className="grid-products">
                    {
                      newArrivalProducts.map((product) => 
                        
                            <ProductCard key={product.id} product={product}/>
                        
                      )
                    }
                </div>
            </div>
        </section>


    </>
  );

};
export default Home;

