import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import UserPage from './components/user/UserPage'
import HomePage from './components/home/HomePage'
import PantryPage from './components/pantry/PantryPage'
import ItemPage from './components/item/ItemPage'
import styled from 'styled-components'

const NaveBare = styled.button`
display: flex;
justify-content: space-between;
max-width: 209px;
margin: auto;
font-size: 20px;
color: blue;
text-align: center;
background-color: rgb(79, 79, 79);
box-shadow: inset 0 0 1em black, 0 0 1em white;
border-radius: 10px;

 a {
   text-decoration: none;
   color: white;
 }
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
