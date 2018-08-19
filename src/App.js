import React, { Component } from "react";
//import logo from "./images/logo.svg";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Events from "./views/Events";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      location: window.location.pathname
    };
  }
  handleContact = () => {
    this.setState({
      open: !this.state.open
    });
  };
  handleNavClick = () => {
    if (this.state.location !== window.location.pathname) {
      this.setState({
        location: window.location.pathname
      });
    }
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.handleNavClick();
    if (prevState.location !== this.state.location) {
      const { location } = this.state;
      switch (location) {
        case "/events":
          return (document.title = "event width | Break it Off");
        default:
          return (document.title = "Break it off");
      }
    }
  }
  render() {
    const { open } = this.state;
    return (
      <div className="app">
        <Header
          open={this.state.open}
          handleContact={this.handleContact}
          handleNavClick={this.handleNavClick}
        />
        <TransitionGroup className="app-transition">
          <CSSTransition
            key={this.state.location}
            timeout={500}
            classNames="page-transition"
          >
            <Switch history={history}>
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    open={this.state.open}
                    handleContact={this.handleContact}
                  />
                )}
              />
              <Route exact path="/events" component={Events} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup className={`modal${open ? " modal--open" : ""}`}>
          {open && (
            <CSSTransition timeout={500} classNames="fade">
              <Contact open={open} handleContact={this.handleContact} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
