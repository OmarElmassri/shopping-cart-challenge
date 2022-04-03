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
    <div className="full-height-vh grey-back layout-container">
      <Navbar />
      <div className="flow-cont">
        <div className="full-container content-container top-med-padd">
          <Router history={history as any}>
            <Switch>
              <Route path="/shopping-cart" render={() => <ShoppingCart />} />
              <Route path="/" render={() => <Products />} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Home;
