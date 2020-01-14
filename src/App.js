import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Switch,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Restaurant from './Components/Restaurant';
import CoffeHouse from './Components/CoffeHouse';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Login from './Components/Login';
import Menu from './Components/Menu';
import Admin from './Admin/Admin';

function App() {
  return (
    <React.Fragment>

    <div className="App">
      <Header/>
       <Switch>
     <Route exact path ="/" component={Home}/> 
     <Route exact path ="/restaurant" component={Restaurant}/>
     <Route exact path ="/coffehouse" component={CoffeHouse}/>
     <Route exact path ="/cart" component={Cart}/>
     <Route exact path ="/login" component={Login}/>
     <Route exact path ="/menu" component={Menu}/>
     <Route exact path ="/admin" conponent={Admin}/>
     <Route component={Home}/>
      </Switch>
      <Footer/>  
    </div>

    </React.Fragment>
  );
}

export default App;
