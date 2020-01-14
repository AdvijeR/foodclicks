import React, { Component } from 'react';
import delfin from '../images/delfin.jpg';
import dubrovnik from '../images/dubrovnik.jpg';
import puntoverde from '../images/puntoverde.jpg';
import {Link} from 'react-router-dom';
import './Header.css';

class Restaurant extends Component { 
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
       <img class="card-img-top" src={delfin} alt="Card image cap"></img>
       </div>
       <div class="card-body">
         <h4 class="card-title">Restaurant</h4>
         <p class="card-text"> Delivery: 15 min.</p>
         <a class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
       </div>
     </div>
     <div class="card">
       <div class="card-img-body">
         <img class="card-img-top" src={puntoverde} alt="Card image cap"></img></div>
       <div class="card-body">
         <h4 class="card-title">Restaurant</h4>
         <p class="card-text">Delivery: 10-15 min.</p>
         <a href="#" class="btn btn-outline-dark">MENU</a>
       </div>
     </div>
     <div class="card">
       <div class="card-img-body">
         <img class="card-img-top" src={dubrovnik} alt="Card image cap"></img></div>
       <div class="card-body">
         <h4 class="card-title">Restaurant</h4>
         <p class="card-text">Delivery: 10-15 min.</p>
         <a href="#" class="btn btn-outline-dark">MENU</a>
       </div>
     </div>
   </div>
</div>
   );
  }}

export default Restaurant;