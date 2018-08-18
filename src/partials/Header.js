import React, { Component } from 'react';
import Navigation from "./Nav/Navigation"

const logo = require("../images/logo.svg")
export default class Header extends Component{
  render(){
    return(
      <header>
        <div className="header--container">
          <div className="brand--logo">
          <img src={logo} alt="break it off" className={'logo'} width={65} height={65}/>
        </div>
        <Navigation/>
        </div>
      </header>  
    )
  }
}