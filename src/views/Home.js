import React, { Component } from "react";
import PropTypes from "prop-types";
const logo = require("../images/logo.svg");

class Home extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleContact: PropTypes.func
  };
  render() {
    const logoStyles = {
      backgroundImage: `url(${logo})`,
      backgroundSize: "contain"
    };
    return (
      <div className="home page">
        <div className="container">
          <div className="brand-logo" style={logoStyles} />
        </div>
      </div>
    );
  }
}

export default Home;
