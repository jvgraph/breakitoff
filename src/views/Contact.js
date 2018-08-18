import React, { Component } from 'react';
import PropTypes from 'prop-types';
const logoWhite = require("../images/logowhite.svg");
class Contact extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleContact: PropTypes.func,
  }
  render() {
    return (
      <div className={`contact${this.props.open ? " open" : ""}`} style={{background: "#000"}}>
        <div className="container">
        <button onClick={() => this.props.handleContact()}>X</button>
          <div className="contact--info">
            <div className="row">
              <h1>contact information</h1>
            </div>
            
            <div className="row">
              <img src={logoWhite} alt="break it off"/>
            </div>

            <div className="row">
              <div className="email-h">
                Booking Email
              </div>
              <a href="mailto:j.locandro119@gmail.com">j.locandro119@gmail.com</a>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;