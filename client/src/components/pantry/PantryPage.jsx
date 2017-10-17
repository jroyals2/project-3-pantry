import React, { Component } from 'react';
import axios from 'axios'
import PantryList from './PantryList'
import NewItem from '../item/NewItem'



class PantryPage extends Component {
    state = {
        pantry: {
            pantryName: '',
            location: '',
            items: []
        },
        addItem: false
    }

    toggleAddItem = () => {
        this.setState({ addItem: !this.state.addItem })
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

    async componentWillMount(){
        const { userId, pantryId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/pantry/${pantryId}`)
        this.setState({pantry: res.data})
    }

    render() {
        return (
            <div>
                <h1>{this.state.pantry.pantryName}</h1>
                <h3>Up in the {this.state.pantry.location}</h3>
                <div><button onClick={this.toggleAddItem}>{this.state.addItem ? 'Hide' : `Let's make an item`}</button></div>
                <NewItem  createNewItem={this.createNewItem}/>
                <PantryList 
                userId={this.props.match.params.userId}
                pantryId={this.props.match.params.pantryId}
                pantry={this.state.pantry}
                deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}

export default PantryPage;