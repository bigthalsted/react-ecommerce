import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';
import Navbar from '../NavBar/Navbar';
import ProductsList from '../pages/ProductsList';
import ProductDetail from '../pages/ProductDetail';
import './App.scss';
import '../data.json';
import Cart from '../components/Cart'
import { Provider } from 'react-redux';
import store from '../redux/store.js'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <BackgroundSection />
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Switch>
          <Route path="/product/:id" exact component={ProductDetail}>
          </Route>
          <Route path="/shop" exact component={ProductsList}>
          </Route>
          <Route path="/cart" exact component ={Cart}>
          </Route>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
