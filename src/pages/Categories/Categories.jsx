
import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import "./Categories.css";
import { categories } from "../../data/products.js";

function Categories() {
  return (
    <>
    
      <section className="section">
        <div className="container">
          <header className="categories-header">
            <h1 className="section-title">Browse Categories</h1>
            <p className="section-subtitle">
              Find the right gear for your needs — from immersive audio to pro-level gaming.
            </p>
          </header>
          <div className="grid-categories">
            {categories.map((category,index) => 
                <CategoryCard key={index} category={category}/> 
            )}
          </div>
        </div>
      </section>
    </>
  );
}


export default Categories;
