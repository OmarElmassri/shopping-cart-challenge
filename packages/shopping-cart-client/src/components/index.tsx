import React from "react";
// Packages
import { Route, Router, Switch } from "react-router-dom";
// Helpers
import history from "../utils/history";
// Components
import Navbar from "./common/navbar/navbar";
import Products from "./products/products";
import ShoppingCart from "./cart/cart";

const Home: React.FunctionComponent = () => {
  return (
    <div className="full-height-vh grey-back">
      <Navbar />
      <div className="not-full-container top-med-padd">
        <Router history={history as any}>
          <Switch>
            <Route path="/shopping-cart" render={() => <ShoppingCart />} />
            <Route path="/" render={() => <Products />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Home;
