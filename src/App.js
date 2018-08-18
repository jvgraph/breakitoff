import React, { Component } from 'react';
//import logo from "./images/logo.svg";
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import Home from "./views/Home"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  handleContact = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div className="App">
        <Header open={this.state.open} handleContact={this.handleContact}/>
        <Home open={this.state.open} handleContact={this.handleContact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
