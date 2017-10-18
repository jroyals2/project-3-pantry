import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import PantryForm from '../pantry/PantryForm'
import EditPantry from '../pantry/EditPantry'
import styled from 'styled-components'

const UserWrapper = styled.div`
background-color: rgba(128,128,128, .8);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
margin: 25px auto;
max-width: 50%;
border-radius: 10px;
box-shadow: inset 0 0 1em black, 0 0 1em white;
`
const ButtonDelete = styled.button`
background-color: grey;
color: black;
border-radius: 10px;
`
const ButtonEditAdd = styled.button`
background-color: black;
color: white;
border-radius 10px;
`

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
    populateGroceryList = () => {
        const groceryList = this.state.user.pantry.map((pantry) => {
            console.log(pantry)
            const pantryList = pantry.items.filter((item) => {

                console.log(item)
                return Number(item.parLevel) >= Number(item.quantity)
            })
            return pantryList
        })

        console.log(groceryList)
    }


    render() {
        return (
            <UserWrapper>
                <h1>{this.state.user.userName}</h1>
                {this.state.user.pantry.map((pantry) => {
                    return (
                        <div key={pantry._id}>
                            <Link to={`/user/${this.state.user._id}/pantry/${pantry._id}`}>{pantry.pantryName}</Link>
                            <div><ButtonDelete value={pantry._id} onClick={this.deletePantry}>Delete</ButtonDelete></div>
                            <div><ButtonEditAdd onClick={this.toggleAdmin}>{this.state.admin ? 'Hide' : 'Edit this Pantry'}</ButtonEditAdd></div>
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
                <h1>Populate Grocery List!</h1>
                <button onClick={this.populateGroceryList}>Populate</button>
            </UserWrapper>
        );
    }
}

export default UserPage;