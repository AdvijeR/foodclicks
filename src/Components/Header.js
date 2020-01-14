import React from 'react';
import login from '../images/login.jpg';
import cart from '../images/cart.jpg';  
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;


const Header= props=>{

    
    return( 
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color">
        <a className="navbar-brand-light"> <Link to="/">HOME</Link></a>
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
      aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="basicExampleNav">
  
      <ul class="navbar-nav mr-auto">
      
        <li class="nav-item">
          <a class="nav-link"><Link to="/restaurant">RESTAURANT</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="/coffehouse">FOOD&COFFEE</Link></a>
       </li>
  
      </ul>
      <Link to='/cart' className="ml-auto"><img id="cart" src={cart}/>
      </Link>
      <ul className="nav navbar-nav navbar-right ">

<li><a className="Login-link "><Link to='/login'><img id="login" src={login}/></Link></a></li>


</ul> 
  
      <form class="form-inline">
        <div class="md-form my-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
        </div>
      </form>
    </div>
  </nav>
        

      );
    }
    export default Header;