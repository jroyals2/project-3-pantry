import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import UserPage from './components/user/UserPage'
import HomePage from './components/home/HomePage'
import PantryPage from './components/pantry/PantryPage'
import ItemPage from './components/item/ItemPage'


class App extends Component {
  render() {
    return (
      <Router> 
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/user/:userId" component={UserPage}/>
            <Route exact path="/user/:userId/pantry/:pantryId" component={PantryPage}/>
            <Route exact path="/user/:userId/pantry/:pantryId/item/:itemId" component={ItemPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
