import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Navigation from './Components/Navigation';

// 13-Jun-2021

const App = () => {

    return (
        <Router>

            <Navigation />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route path="/cart" exact component={Cart} />
            </Switch>

        </Router>
    );
};

export default App;