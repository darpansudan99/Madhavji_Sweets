import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Components/Components Styles/Category.css';
import CategoryCard from './Cards Components/CategoryCard';

const Category = () => {
    var [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(resp => {
                console.log(resp);
                setCategory(resp.data.categories)
            })
            .catch(err => alert("Api failed for Category"))
    }, []);

    return (
        <div id="categoryContainer">
            <div className="container">
                <h1> Categories </h1>
                <div id="categoryList">
                    {category.length !== 0 && <>
                        <CategoryCard val={category[2]} />
                        <CategoryCard val={category[5]} />
                        <CategoryCard val={category[8]} />
                        <CategoryCard val={category[9]} />
                        <CategoryCard val={category[10]} />
                        <CategoryCard val={category[11]} />
                        <CategoryCard val={category[12]} />
                    </>}
                </div>
            </div>
        </div>
    )
}

export default Category
