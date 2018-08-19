import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class Navigation extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleContact: PropTypes.func,
    handleNavClick: PropTypes.func
  };
  render() {
    return (
      <div className={"nav"}>
        <ul>
          <li>
            <Link onClick={this.props.handleNavClick} to="/events">
              Events
            </Link>
          </li>
          <li>
            <a onClick={() => this.props.handleContact()}>contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
