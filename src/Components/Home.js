import React, { Component } from 'react';
import mhouse from '../images/mhouse.jpg';
import burgerking from '../images/burgerking.jpg';
import fratelli from '../images/fratelli.jpg';
import delfin from '../images/delfin.jpg';
import grish from '../images/grish.jpg';
import simple from '../images/simple.jpg';
import food7 from '../images/food7.jpg';
import food10 from '../images/food10.jpg';
import './Header.css';
import {Link} from 'react-router-dom';

class Home extends Component{
  constructor(props) {
      super(props);
  }
    
    render(){

    return( 
     
      <div class="container" > <h1 class="card-titlee"><span></span><br></br>FOODclicks<br></br></h1>
     
        <img src={food7} className=" img-fluid img"></img>
        <div className="card bg-dark text-white"></div>
        <div className="card-img-overlay card-title "> <br></br> <br></br><br></br>
     </div>
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
       <img class="card-img-top" src={mhouse} alt="Card image cap"></img></div>
     <div class="card-body">
       <h4 class="card-title">Juices</h4>
       <p class="card-text">Delivery: 10-15 min.</p>
       <a href="#" class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
     </div>
   </div>
   <div class="card">
     <div class="card-img-body">
       <img class="card-img-top" src={fratelli} alt="Card image cap"></img></div>
     <div class="card-body">
       <h4 class="card-title">Restaurant</h4>
       <p class="card-text">Delivery: 10-15 min.</p>
       <a href="#" class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
     </div>
   </div><h1></h1>
 </div><div class="card-group vgr-cards">
   <div class="card">
     <div class="card-img-body">
     <img class="card-img-top" src={burgerking} alt="Card image cap"></img>
     </div>
     <div class="card-body">
       <h4 class="card-title">Restaurant</h4>
       <p class="card-text"> Delivery: 15 min.</p>
       <a class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
     </div>
   </div>
   <div class="card">
     <div class="card-img-body">
       <img class="card-img-top" src={simple} alt="Card image cap"></img></div>
     <div class="card-body">
       <h4 class="card-title">Juices</h4>
       <p class="card-text">Delivery: 10-15 min.</p>
       <a href="#" class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
     </div>
   </div>
   <div class="card">
     <div class="card-img-body">
       <img class="card-img-top" src={grish} alt="Card image cap"></img></div>
     <div class="card-body">
       <h4 class="card-title">Restaurant</h4>
       <p class="card-text">Delivery: 10-15 min.</p>
       <a href="#" class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
       
</div>
      
   </div>
    
 </div>
 <div>
 
 <br></br>
       <p><h3 className="h3"> About us</h3> </p>
       <p className="p">We are online food delivery service. </p>
       
       <p className="p">Our mission is to make food available anytime and providing our community various
choices.</p>
<p className="p">Our vision is to bring together the customers and restaurants, to serve our clients with a
high level of service and prompt delivery, allowing customers to order from a wide array
of restaurants with a single tap of their mobile phone.
</p>
       <img src={food10} className=" img-fluid img"></img>
        <div className="card bg-dark text-white"></div>
        <div className="card-img-overlay card-title "> <br></br> <br></br><br></br>
       
        
 </div>
</div>
</div>
  
 );
}}

export default Home;