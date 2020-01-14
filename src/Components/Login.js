import React from 'react';
import './login.css';

export default ()=>{

    return (
        <React.Fragment>
        <div className=""><br></br><br></br><br></br>
        <h1 className="text-left">Login:</h1>
  <form action="/action_page.php"/>    
    <div className="row">
      <div className="vl">
        <span className="vl-innertext">or</span>
      </div>

      <div className="col">
        <div className="hide-md-lg">
          
        </div>

        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="submit" value="Login"/>
      </div>

    </div>
  
</div>

<div className= "">
  <div className="row">
    <div className="col">
      <a href="#"  className="btn">Sign up</a>
    </div>
    <div className="col">
      <a href="/"  className="btn">Forgot password?<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></a>
    </div>
  </div>
 </div>
 </React.Fragment>
    );
}

