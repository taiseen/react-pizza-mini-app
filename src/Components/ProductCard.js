import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from './Context/ProductContext';

const ProductCard = ({ info }) => {

    const { idMeal, strMeal, strMealThumb } = info;
    const { handleAddProduct } = useContext(ProductContext);
    const [isAdded, setIsAdded] = useState(false);

    return (
        <Link to={{ pathname: `/product/${idMeal}`, state: info }}>

            <img src={strMealThumb} alt="pizza" />

            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{strMeal}</h2>
                <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">Small</span>
            </div>

            <div className="flex justify-between items-center mt-3  ">
                <span>$10</span>
                <button className={`${isAdded ? 'bg-green-500' : 'bg-yellow-500'} py-1 px-4 rounded-full font-bold focus:outline-none`}
                    disabled={isAdded}
                    onClick={(e) => handleAddProduct(e, info, setIsAdded)}>
                    Add{isAdded ? 'ed..' : ''}
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;