import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import PantryForm from '../pantry/PantryForm'

class UserPage extends Component {
    state = {
        user : {
            userName:'',
            password: '',
            pantry: []
        }
    }

    async componentWillMount(){
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }

    createNewPantry = async (newPantry) => {
    const { userId } = this.props.match.params
    const res = await axios.post(`/api/users/${userId}/pantry`, {
    "pantry": newPantry
    })
    console.log(res.data)
    this.setState({user: res.data})
  }
    
    render() {
        return (
            <div>
                <h1>{this.state.user.userName}</h1>
                {this.state.user.pantry.map((pantry) => {
                    return (
                        <Link key={pantry._id} to={`/user/${this.state.user._id}/pantry/${pantry._id}`}>{pantry.pantryName}</Link>
                    )
                })}
                <PantryForm 
                pantry={this.state.pantry}
                createNewPantry={this.createNewPantry}
                />
            </div>
        );
    }
}

export default UserPage;