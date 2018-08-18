import React, { Component } from 'react';
//import logo from "./images/logo.svg";
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import Home from "./views/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
