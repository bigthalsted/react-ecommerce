import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../NavBar/Navbar'
import ProductsList from '../pages/ProductsList';
import ProductDetail from '../pages/ProductDetail';
import './App.scss';
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import { Provider } from 'react-redux'
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
            <Switch>
              <Route path="/" exact component={Home}/>
            </Switch>
            <Switch>
              <Route path="/product/:id" exact component={ProductDetail}/>
              <Route path="/shop" exact component={ProductsList}/>
              <Route path="/cart" exact component ={Cart}/>
            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
