import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import UserPage from './components/user/UserPage'
import HomePage from './components/home/HomePage'


class App extends Component {
  render() {
    return (
      <Router> 
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/user/:userId" component={UserPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
