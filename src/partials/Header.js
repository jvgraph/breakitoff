import React, { Component } from 'react';
const logo = require("../images/logo.svg")
export default class Header extends Component{
  render(){
    return(
      <header>
        <div className="brand--logo">
          <img src={logo} alt="break it off" />
        </div>
      </header>  
    )
  }
}