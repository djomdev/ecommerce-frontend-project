import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Terms from './components/Terms';
import ProductDynamic from './components/ProductDynamic';
import ProductType from './components/ProductType';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <div className='page'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/terms' component={Terms} />
          <Route exact path='/about' component={About} />
          <Route exact path='/all-products' component={Home} />
          <Route exact path='/products/:id' component={ProductDynamic} />
          <Route path='/category/:name' component={ProductType} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;