import React from 'react';
import '../Components Styles/Category.css';

const CategoryCard = ({ val }) => {
    return (
        <div className="CategoryCardContainer" id={val.idCategory}>
            <img src={val.strCategoryThumb} alt={val.strCategory} />
            <h1> {val.strCategory}</h1>
        </div>
    )
}

export default CategoryCard