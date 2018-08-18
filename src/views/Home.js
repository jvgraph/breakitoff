import React, {Component} from 'react';
import PropTypes from "prop-types"
import Contact from "./Contact"
import {CSSTransition, TransitionGroup} from 'react-transition-group';
const logo = require("../images/logo.svg")

class Home extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleContact: PropTypes.func
  }
  render() {
    const {open, handleContact} = this.props;
    const logoStyles = {
      backgroundImage: `url(${logo})`,
      backgroundSize: 'contain'
    }
    return (
      <div className="home">
        <div className="container">
          <div className="brand-logo" style={logoStyles} />
        </div>
        <TransitionGroup className={`modal${open ? " modal--open" : ""}`}>
          {open && (
            <CSSTransition timeout={500} classNames="fade">
              <Contact open={open} handleContact={handleContact}/>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}

export default Home;