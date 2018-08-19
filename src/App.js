import React, {Component} from 'react';
//import logo from "./images/logo.svg";
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import Home from "./views/Home"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

const Event = () => {
  return (
    <div>
      events page
    </div>

  )
}

class App extends Component {
  constructor(props) {
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
        <Router>
          <Switch history={history}>

            <div className='app-content'>
              <Route
                exact
                path='/'
                render={(props) => (<Home {...props} open={this.state.open} handleContact={this.handleContact}/>)}/>
              <Route path='/events' component={Event}/>
            </div>

          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
