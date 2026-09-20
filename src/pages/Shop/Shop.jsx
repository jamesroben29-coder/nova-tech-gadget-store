import React, { useState } from "react";
import { categories, products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.css";
import { useSearchParams } from "react-router-dom";



const Shop = () => {

  const [ search, setSearch ] = useState("");
  const [ sort , setSort ] = useState("default");
  const [ searchParams , setSearchParams ] = useSearchParams();
  
  const activeCategory = searchParams.get("category") || "all";

  const setActiveCategory = (category) => {
    setSearchParams(category === "all" ? {} : { category });
  };

  let visibleProducts = products.filter((product) => {
    
    const matchCategory = activeCategory === "all" || activeCategory === product.category;
    const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
    
    return matchCategory && matchSearch;

  });

  if(sort === "price-asc"){
      visibleProducts = [...visibleProducts ].sort((a , b) => a.price - b.price); 
  }

  if(sort === "price-desc"){
      visibleProducts = [ ...visibleProducts ].sort((a, b) => b.price - a.price);
  }

  if(sort === "rating"){
      visibleProducts = [ ...visibleProducts ].sort((a , b) => b.rating - a.rating);
  }
  

  return <>
  
    <section className="section">
        <div className="container">
            <header className="shop-header">
                <h1 className="section-title">
                    Shop All Products
                </h1>
                <p className="section-subtitle">
                    {visibleProducts.length} products available
                </p>
            </header>

            <div className="shop-toolbar">
                  <input type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="shop-search"
                  />
                  <select className="shop-sort" 
                      value={sort} onChange={(e) => setSort(e.target.value)}>
                      <option value="default">Sort Default</option>
                      <option value="price-asc">Price : Low To High</option>
                      <option value="price-desc">Price : Higt To Low</option>
                      <option value="rating">Highest Reated</option>
                  </select>
            </div>

            <div className="shop-filters">
                  <button className={`filter-chip ${activeCategory === "all" ? "active" : ""}`}
                    onClick={() => setActiveCategory("all")}
                  >All</button>

                  {
                    categories.map((category) => (
                        <button
                          className={`filter-chip ${activeCategory === category.id ? "active" : ""}`}
                          onClick={() => setActiveCategory(category.id)} key={category.id}
                        >{category.name}</button>
                    ))
                  }
            </div>

            
                  {visibleProducts.length === 0 ? 
                  (
                    <div className="empty-state">
                        <h3>No Products Found</h3>
                        <p>Try a different search or create</p>
                    </div>
                  )
                  
                  : 
                  
                  (
                    <div className="grid-products">
                        {visibleProducts.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
                  )
                  
                  }
            

        </div>
    </section>

  </>;
};

export default Shop;
