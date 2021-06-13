import { Link } from "react-router-dom";

const ProductInfo = (props) => {

    const { strMeal, strMealThumb } = props.location.state;

    return (
        <div className="container mx-auto mt-12">

            <Link to='/'><button className="font-bold mb-12">Back</button></Link>

            <div className="flex">
                <img src={strMealThumb} alt="pizza" className="rounded" />

                <div className="ml-16">
                    <h2 className="text-xl font-bold">{strMeal}</h2>
                    <div className="text-sm">Small</div>
                    <div className="font-bold mt-2">$10</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4 focus:outline-none">Add</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;