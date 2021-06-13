import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>Carts</Link>
        </div>
    );
};

export default Navigation;