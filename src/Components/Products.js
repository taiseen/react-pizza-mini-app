import { useContext } from "react";
import { useLocation } from "react-router";
import { ProductContext } from './Context/ProductContext';
import ProductCard from "./ProductCard"

const Products = () => {

    const location = useLocation();
    const { loading, allProducts } = useContext(ProductContext);

    const meals = (location.pathname === '/products')
        ? allProducts.map(product => <ProductCard info={product} key={product.idMeal} />)
        : allProducts.slice(0, 20).map(product => <ProductCard info={product} key={product.idMeal} />);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products : {meals.length}</h1>

            {/* ##################### Parent Container ##################### */}
            <div className="grid grid-cols-5 my-8 gap-24">

                {loading && <p className="text-3xl text-center">Loading...</p>}

                {meals}

            </div>
        </div>
    );
};

export default Products;