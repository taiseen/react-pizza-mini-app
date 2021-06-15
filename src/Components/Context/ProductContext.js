import { createContext } from "react";
import { useState, useEffect } from 'react'
export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addProduct, setAddProduct] = useState({});

    console.log(addProduct);

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

    const handleAddProduct = (e, product, setIsAdded) => {
        e.preventDefault();

        let newProduct = { ...addProduct }; // newProduct = {} 
        if (!newProduct.items) {
            newProduct.items = {} // newProduct = { items: { } } 
        }

        if (newProduct.items[product.idMeal]) {
            // next time product quantity increase...
            newProduct.items[product.idMeal] += 1; // newProduct = { items: { 62ZA18 : 3 } } 
        } else {
            // first time product quantity...
            newProduct.items[product.idMeal] = 1; // newProduct = { items: { 62ZA18 : 1 } }
        }

        if (!newProduct.totalItem) {
            newProduct.totalItem = 0;
        }
        newProduct.totalItem += 1;

        setAddProduct(newProduct);
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 1000);




        // if (addProduct.includes(product)) {
        //     alert('Product already added...')
        // } else {
        //     const newProduct = [...addProduct, product];
        //     setAddProduct(newProduct)
        // }


    }

    // get LocalStorage
    useEffect(() => {
        const localData = window.localStorage.getItem('product');
        const pro = localData ? JSON.parse(localData) : [];
        setAddProduct(pro)
    }, []);

    // set LocalStorage 
    useEffect(() => {
        window.localStorage.setItem('product', JSON.stringify(addProduct));
    }, [addProduct]);

    return (
        <ProductContext.Provider value={{ loading, allProducts, addProduct, handleAddProduct }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;