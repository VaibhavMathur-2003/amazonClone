import "./App.css";
import ReactDOM from "react-dom";
import { Carousal } from "./Carousal";
import { Navbar } from "./Navbar";
import { Shopping } from "./Shopping";
import Cart from "./Cart.js";
import Login from "./Login";
import { HashRouter } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HttpsRedirect from "react-https-redirect";

// import { ShoppingCard } from './ShoppingCard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Carousal />
            <Shopping />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
    // <>
    // <Navbar/>
    // <Carousal/>
    // <Shopping/>
    // <Cart/>
    // <Login/>

    // </>
  );
}

export default App;
