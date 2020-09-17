import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Hotels from './pages/Hotels';
import FoodService from './pages/FoodService';
import CabService from './pages/CabService';
import Contact from './pages/Contact';
import Mice from './pages/Mice';
import ScrollToTop from './components/ScrollToTop';



const App = props => {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/locations" component={ Locations } />
        <Route exact path="/hotels" component={ Hotels } />
        <Route exact path="/mice" component={ Mice } />
        <Route exact path="/food-service" component={ FoodService } />
        <Route exact path="/cab-service" component={ CabService } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
      <Footer />
    </div>
  );
}



export default App;
