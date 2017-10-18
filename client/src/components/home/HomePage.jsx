import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const HomeWrapper = styled.div`
background-color: grey;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 25px auto;
max-width: 50%;
border-radius: 10px;
box-shadow: inset 0 0 1em black, 0 0 1em white;
`
const SignUpWrapper = styled.div`
display: flex;
align-items: center;

`
class HomePage extends Component {
    state = {
        users: []
    }

    componentWillMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({ users: res.data })
    }

    updateUser = async (newUser) => {
        const res = await axios.post('/api/users', {
            "user": newUser
        })
        const clonedusers = [...this.state.users]
        clonedusers.push(res.data)
        this.setState({ users: clonedusers })
    }


    render() {
        
        const users = this.state.users.map(user => {
            return (
                <div key={user._id}>
                    <Link to={`/user/${user._id}`}>{user.userName}</Link>
                </div>
            )
        })
        return (
            <HomeWrapper>
                <h1>Users</h1>
                <h3>Please choose an Exsisting User</h3>
                {users}
                <SignUpForm updateUser={this.updateUser} />
            </HomeWrapper>

        );
        
    }
    
}
export default HomePage;