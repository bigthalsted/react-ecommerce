import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';
import Navbar from '../components/NavBar/Navbar';
import ProductDetail from '../pages/ProductDetail';
import ProductsList from '../pages/ProductsList';
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
          <Route path="/shop" exact component={ProductsList} />
        </Switch>
        <Switch>
          <Route path="/product/:id" exact component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
