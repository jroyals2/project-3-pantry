import React, { Component } from 'react';
import axios from 'axios'
import EditItem from './EditItem'
import NewItem from './NewItem'
import{ Link } from 'react-router-dom'

class ItemPage extends Component {
    state = {
        item: {
        itemName: '',
        quantity: '',
        parLevel: ''
        }
    }
    async componentWillMount(){
        const { userId, pantryId, itemId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/pantry/${pantryId}/item/${itemId}`)
        this.setState({item: res.data})
    }

    render() {
        return (
            <div>   
                <h1>{this.state.item.itemName}</h1>
                
                <EditItem item={this.state.item}/>

                <p>If everything looks good lets head back!</p>
                <Link to={`/user/${this.props.match.params.userId}/pantry/${this.props.match.params.pantryId}`}>Did this work??</Link>
            </div>
        );
    }
}

export default ItemPage;