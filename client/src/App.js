import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import UserPage from './components/user/UserPage'
import HomePage from './components/home/HomePage'
import PantryPage from './components/pantry/PantryPage'
import ItemPage from './components/item/ItemPage'
import styled from 'styled-components'

const NaveBare = styled.div`
display: flex;
justify-content: space-between;
max-width: 210px;
margin: auto;
font-size: 40px;
color: blue;
background-color: grey;
box-shadow: inset 0 0 1em black, 0 0 1em white;
`

class App extends Component {
  render() {
    return (
      <Router> 
        <div>
          <NaveBare><Link to={'/'}>Back to Users</Link></NaveBare>
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
