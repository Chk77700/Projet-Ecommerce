import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductProvider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/views/Home";
import Details from "./components/views/Details";
import Product from "./components/views/Product";
import ProductTest from "./components/views/ProductTest";
import Default from "./components/views/Default";
import Shop from "./components/shop/shop";

import Header from './components/views/Header';
import Sidebar from './components/views/Sidebar';

import Modal from "./components/views/Modal";

export default class App extends Component {
  render () {
    return (
      <ProductProvider>
        <div className="un">
          <Sidebar />
          <Header />
        </div>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/producttest/details" component={Details} />
              <Route path="/product" component={Product} />
              <Route path="/producttest" component={ProductTest} />
              <Route path="/shop" component={Shop} />
              <Route component={Default} />
            </Switch>
            <Modal />
          </div>
        </Router>
      </ProductProvider>
    );
  }
}
