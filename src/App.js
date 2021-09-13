import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router className="Homepage">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">untitled</Link>
            </li>
            <li>
              <Link to="/shop">shop</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>home</h2>;
}

function Shop() {
  return <h2>SHOP</h2>;
}

function Cart() {
  return <h2>CART</h2>;
}