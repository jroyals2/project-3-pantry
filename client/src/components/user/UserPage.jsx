import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

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

    render() {
        return (
            <div>
                <h1>{this.state.user.userName}</h1>
                {this.state.user.pantry.map((pantry) => {
                    return (
                        <Link key={pantry._id} to={`/user/${this.state.user._id}/pantry/${pantry._id}`}>{pantry.pantryName}</Link>
                    )
                })}
            </div>
        );
    }
}

export default UserPage;