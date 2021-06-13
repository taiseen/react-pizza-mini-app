import { useContext } from "react";
import { ProductContext } from './Context/ProductContext';

const Cart = () => {
    document.title = 'Cart';

    const { addProduct } = useContext(ProductContext);

    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">

            <h2 className="my-12 font-bold">Card Items</h2>

            <ul>
                <li>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-24" src="./img/peproni.png" alt="" />
                            <h2 className="font-bold ml-4 w-48">name</h2>
                        </div>

                        <div >
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none focus:outline-none">-</button>
                            <span className="px-4">0</span>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none focus:outline-none">+</button>
                        </div>

                        <span>$10</span>

                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white focus:outline-none">Delete</button>
                    </div>
                </li>
            </ul>
            {/* {addProduct.map(product => <h1>{product.strMeal}</h1>)} */}
        </div>
    );
};

export default Cart;