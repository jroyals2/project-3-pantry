import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class HomePage extends Component {
    state = {
        users: []
    }

componentWillMount() {
this.getAllUsers()    
}

getAllUsers = async () => {
   const res = await axios.get('/api/users')
   this.setState({users: res.data})
}


    render() {
        return (
            <div>
                <h1>Users</h1>
                <h3>Please choose an Exsisting User</h3>
                {this.state.users.map(user => {
                    return (<Link key={user._id}to={`/user`}>{user.userName}</Link>)
                })}
            </div>
        );
    }
}

export default HomePage;