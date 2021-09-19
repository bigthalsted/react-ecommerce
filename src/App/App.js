import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';

import Navbar from '../components/NavBar/Navbar';
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
      </Router>
    </div>
  );
}

export default App;
