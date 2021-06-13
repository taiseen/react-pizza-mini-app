import { Link } from "react-router-dom"

const Navigation = () => {

    const cartStyle = {
        backgroundColor: '#f59e0d',
        display: 'flex',
        borderRadius: 50,
        padding: '6px 12px'
    }

    return (
        <nav className="container mx-auto flex items-center justify-between py-4">

            <Link to='/'>
                <img src="./img/logo.png" alt="logo" />
            </Link>

            <ul className="flex items-center">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li className="ml-6">
                    <Link to='/products'>Products</Link>
                </li>
                <li className="ml-6">
                    <Link to='/cart'>
                        <div style={cartStyle}>
                            <span>10</span>
                            <img className='ml-2' src="./img/cart.png" alt="cart" />
                        </div>
                    </Link>
                </li>
            </ul>



        </nav>
    );
};

export default Navigation;