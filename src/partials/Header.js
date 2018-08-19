import React, { Component } from 'react';
import Navigation from "./Nav/Navigation"
import PropTypes from "prop-types"

const logo = require("../images/logo.svg")
export default class Header extends Component{
  static propTypes = {
    open: PropTypes.bool,
    handleContact: PropTypes.func,
    
  }
  render(){
    return(
      <header>
        <div className="header--container">
          <div className="brand--logo">
          <img src={logo} alt="break it off" className={'logo'} width={65} height={65}/>
        </div>
        <Navigation handleContact={this.props.handleContact}/>
        </div>
      </header>  
    )
  }
}