import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';

import Navbar from '../components/NavBar/Navbar';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <BackgroundSection />
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Switch>
          <Route path="/shop" exact component={Products} />
        </Switch>
        <Switch>
          <Route path="/product/TH01234" exact component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
