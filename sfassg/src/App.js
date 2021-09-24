import React,{ Component } from 'react';
import './App.css';
import Landing from './components/landing'
import ProductCard from './components/ProductCard'
import Navbar from  './components/navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Cart from './components/Cart'
import values from './components/ProductCard';

class App extends Component {
  render(){
    return(
      <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route path="/category">
            <ProductCard/>
          </Route>
    </Switch>
      </div>
      </Router>
    )
  }
}
export default App;