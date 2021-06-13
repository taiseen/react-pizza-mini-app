import { Link } from "react-router-dom";

const ProductCard = ({ info }) => {

    const { idMeal, strMeal, strMealThumb } = info;

    return ( 

        <Link to={{ pathname: `/product/${idMeal}`, state: info }}>

            <img src={strMealThumb} alt="pizza" />

            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{strMeal}</h2>
                <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">Small</span>
            </div>

            <div className="flex justify-between items-center mt-3  ">
                <span>$10</span>
                <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold focus:outline-none">Add</button>
            </div>
            
        </Link>
    );
};

export default ProductCard;