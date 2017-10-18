import React, { Component } from 'react';
import axios from 'axios'
import PantryList from './PantryList'
import NewItem from '../item/NewItem'
import styled from 'styled-components'

const PantryWrapper = styled.div`
background-color: rgba(128,128,128, .8);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 25px auto;
max-width: 50%;
border-radius: 10px;
box-shadow: inset 0 0 1em black, 0 0 1em white;
`

class PantryPage extends Component {
    state = {
        pantry: {
            pantryName: '',
            location: '',
            items: []
        },
        addItem: false,
        editItem: false
    }

    toggleAddItem = () => {
        this.setState({ addItem: !this.state.addItem })
    }
    toggleEditItem = () => {
        this.setState({editItem: !this.state.editItem})
    }
    createNewItem = async (newItem) => {
        const { userId, pantryId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/pantry/${pantryId}/item`, {
            item: newItem
        })
        this.setState({ pantry: res.data })
    }

    deleteItem = async (event) => {
        event.preventDefault()
        const { userId, pantryId } = this.props.match.params
        const id = event.target.value
        const res = await axios.delete(`/api/users/${userId}/pantry/${pantryId}/item/${id}`)
        this.setState({ pantry: res.data })
    }
    handleChange = (event, itemId) => {
        const attribute = event.target.name
        const clonedPantry = { ...this.state.pantry }
        const item = clonedPantry.items.find(i => i._id === itemId)
        console.log(item)
        item[attribute] = event.target.value
        this.setState({ pantry: clonedPantry })
    }
    updateItem = async (itemId) => {
        const { userId, pantryId } = this.props.match.params
        const id = itemId
        const clonedPantry = { ...this.state.pantry }
        const item = clonedPantry.items.find(i => i._id === itemId)
        console.log(item)
        const res = await axios.patch(`/api/users/${userId}/pantry/${pantryId}/item/${id}`, {
            item: item
        })
        console.log(res.data)
        this.setState({ pantry: res.data })
    }


    async componentWillMount(){
        const { userId, pantryId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/pantry/${pantryId}`)
        this.setState({pantry: res.data})
    }

    render() {
        return (
            <PantryWrapper>
                <h1>{this.state.pantry.pantryName}</h1>
                <h3>Up in the {this.state.pantry.location}</h3>
                <div><button onClick={this.toggleAddItem}>{this.state.addItem ? 'Hide' : `Let's make an item`}</button></div>
                {this.state.addItem ? <NewItem  createNewItem={this.createNewItem}/> : `Don't see what you want?`}
                <PantryList 
                userId={this.props.match.params.userId}
                pantryId={this.props.match.params.pantryId}
                pantry={this.state.pantry}
                deleteItem={this.deleteItem}
                toggleEditItem={this.toggleEditItem}
                handleChange={this.handleChange}
                updateItem={this.updateItem}
                editItem={this.state.editItem}
                />
            </PantryWrapper>
        );
    }
}

export default PantryPage;