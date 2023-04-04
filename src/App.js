import { Carousal } from "./Carousal";
import { Navbar } from "./Navbar";
import { Shopping } from "./Shopping";
import Cart from "./Cart.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
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
  );
}

export default App;
