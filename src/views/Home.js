import React, { Component } from 'react';
const logo = require("../images/logo.svg")
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
        <img src={logo} alt="break it off"/>
        </div>
      </div>
    );
  }
}

export default Home;