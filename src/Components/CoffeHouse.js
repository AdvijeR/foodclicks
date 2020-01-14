import React, {Component} from 'react';
import grish from '../images/grish.jpg';
import burgerking from '../images/burgerking.jpg';
import fratelli from '../images/fratelli.jpg';
import {Link} from 'react-router-dom';
import './Header.css';

class CoffeHouse extends Component { 
    constructor(props) {
        super(props);
    }
      
      render(){
  
      return(  
        
        <div class="container" > <h1 class="card-titlee"><span></span><br></br>FOODclicks<br></br></h1>
        <br></br>
   <div class="card-group vgr-cards">
     <div class="card">
       <div class="card-img-body">
       <img class="card-img-top" src={fratelli} alt="Card image cap"></img>
       </div>
       <div class="card-body">
         <h4 class="card-title">Kitchen Bar&Cafe</h4>
         <p class="card-text"> Delivery: 10-15 min.</p>
         <a class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
       </div>
     </div>
     <div class="card">
       <div class="card-img-body">
         <img class="card-img-top" src={burgerking} alt="Card image cap"></img></div>
       <div class="card-body">
         <h4 class="card-title">Fast Food</h4>
         <p class="card-text">Delivery: 10-15 min.</p>
         <a href="#" class="btn btn-outline-dark">MENU</a>
       </div>
     </div>
     <div class="card">
       <div class="card-img-body">
         <img class="card-img-top" src={grish} alt="Card image cap"></img></div>
       <div class="card-body">
         <h4 class="card-title">Sandwiches and goodies</h4>
         <p class="card-text">Delivery: 10-15 min.</p>
         <a href="#" class="btn btn-outline-dark">MENU</a>
       </div>
     </div>
   </div>
</div>
   );
  }}

export default CoffeHouse;