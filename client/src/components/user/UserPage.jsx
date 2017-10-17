import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import PantryForm from '../pantry/PantryForm'
import EditPantry from '../pantry/EditPantry'

class UserPage extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            pantry: []
        },
        admin: false
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    toggleAdmin = () => {
        this.setState({ admin: !this.state.admin })
    }

    deletePantry = async (event) => {
        event.preventDefault()
        const { userId } = this.props.match.params
        const id = event.target.value
        const res = await axios.delete(`/api/users/${userId}/pantry/${id}`)
        this.setState({ user: res.data })
    }

    createNewPantry = async (newPantry) => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/pantry`, {
            "pantry": newPantry
        })
        this.setState({ user: res.data })
    }
    updatePantry = async (pantryId) => {
        const { userId } = this.props.match.params
        const id = pantryId
        const clonedUser = { ...this.state.user }
        const pantry = clonedUser.pantry.find(i => i._id === pantryId)
        const res = await axios.patch(`/api/users/${userId}/pantry/${id}`, {
            pantry: pantry
        })
        this.setState({ user: res.data })
    }

    handleChange = (event, pantryId) => {
        const attribute = event.target.name
        const clonedUser = { ...this.state.user }
        const pantry = clonedUser.pantry.find(i => i._id === pantryId)
        console.log(pantry)
        pantry[attribute] = event.target.value
        this.setState({ user: clonedUser })
    }



    render() {
        return (
            <div>
                <h1>{this.state.user.userName}</h1>
                {this.state.user.pantry.map((pantry) => {
                    return (
                        <div key={pantry._id}>
                            <Link to={`/user/${this.state.user._id}/pantry/${pantry._id}`}>{pantry.pantryName}</Link>
                            <div><button value={pantry._id} onClick={this.deletePantry}>Delete</button></div>
                            <div><button onClick={this.toggleAdmin}>{this.state.admin ? 'Hide' : 'Edit this Pantry'}</button></div>
                            {this.state.admin ? <EditPantry
                                handleChange={this.handleChange}
                                updatePantry={this.updatePantry}
                                pantry={pantry} /> : `Don't like this pantry? Edit it !`}
                            <hr />
                        </div>
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