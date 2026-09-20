import React from "react";
import ArrowrightIcon from "../../assets/icons/ArrowRightIcon"
import "./CategoryCard.css";
import { Link } from "react-router-dom";


const CategoryCard = ({category}) => {
  return (
    <Link to={`/shop?category=${category.id}`} className="category-card">
        <div className="category-image">
            <img src={category.image} alt={category.name} />
        </div>

        <div className="category-overlay">
            <h3>{category.name}</h3>
            <span className="category-cta">
                Shop Now
                <ArrowrightIcon/>
            </span>
        </div>
    </Link>
  );
};

export default CategoryCard;
