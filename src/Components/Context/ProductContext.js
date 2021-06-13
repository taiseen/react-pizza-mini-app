import { createContext } from "react";
import { useState, useEffect } from 'react'    
export const ProductContext = createContext();

const ProductContextProvider = (props) => {


    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // https://www.themealdb.com/api/json/v1/1/categories.php
        // strCategory

        const categories = 'Dessert'
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setAllProducts(data.meals)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <ProductContext.Provider value={{ loading, allProducts }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;