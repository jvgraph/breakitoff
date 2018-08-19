import React, { Component } from "react";
import Navigation from "./Nav/Navigation";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const logo = require("../images/logo.svg");
export default class Header extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleContact: PropTypes.func,
    handleNavClick: PropTypes.func
  };
  render() {
    return (
      <header>
        <div className="header--container">
          <div className="brand--logo">
            <Link to="/" onClick={this.props.handleNavClick}>
              <img
                src={logo}
                alt="break it off"
                className={"logo"}
                width={65}
                height={65}
              />
            </Link>
          </div>
          <Navigation
            handleNavClick={this.props.handleNavClick}
            handleContact={this.props.handleContact}
            open={this.props.open}
          />
        </div>
      </header>
    );
  }
}
