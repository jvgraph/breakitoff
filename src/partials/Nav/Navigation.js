import React, { Component } from 'react';
import PropTypes from "prop-types"
class Navigation extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleContact: PropTypes.func
  }
  render() {
    return (
      <div className={"nav"}>
        <ul>
          <li>
            <a onClick={() => this.props.handleContact()}>
              contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;