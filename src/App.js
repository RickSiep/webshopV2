import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Home from './components/Home';
import Works from './components/Works';
import UserForm from './components/Form/UserForm';


class App extends Component{
  render() {
      return(
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/bewijzenmap/build/" component={Home}></Route>
                <Route path="/products" component={ProductList}></Route>
                <Route path="/details" component={Details}></Route>
                <Route path="/works" component={Works}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/form" component={UserForm}></Route>
                <Route component={Default}></Route>
            </Switch>
            <Footer/>
            <Modal/>
        </React.Fragment>
      );
    }
}

export default App;
