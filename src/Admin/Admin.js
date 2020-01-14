import React, { Component } from 'react';
import Adheader from "./Adheader.js";
import Content from "./Content.js";
import Adfooter from "./Adfooter.js";


class Admin extends Component { 
   
      render(){
  
      return(
<div> 
    <Adheader/>
    <Content/>
    <Adfooter/>

</div>
      )
  }}

export default Admin;