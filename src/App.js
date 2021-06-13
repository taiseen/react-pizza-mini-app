import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductInfo from "./Components/ProductInfo";
import AllProducts from './Components/AllProducts';
import Navigation from './Components/Navigation';
import ProductContextProvider from "./Components/Context/ProductContext";

// 13-Jun-2021

const App = () => {

    return (
        <ProductContextProvider>
            <Router>

                <Navigation />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" exact component={AllProducts} />
                    <Route path="/product/:id" exact component={ProductInfo} />
                    <Route path="/cart" exact component={Cart} />
                </Switch>

            </Router>
        </ProductContextProvider>
    );
};

export default App;