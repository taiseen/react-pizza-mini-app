import { useContext } from "react";
import { ProductContext } from './Context/ProductContext';
import Products from "./Products";

const AllProducts = () => {

    document.title = 'All Products';
    const { loading, allProducts } = useContext(ProductContext);

    return (
        <div>
             <Products />         
        </div>
    );
};

export default AllProducts;