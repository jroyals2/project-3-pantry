import React, { Component } from 'react';
import axios from 'axios'
import PantryList from './PantryList'



class PantryPage extends Component {
    state = {
        pantry: {
            pantryName: '',
            location: '',
            items: []
        },
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
                <PantryList 
                userId={this.props.match.params.userId}
                pantryId={this.props.match.params.pantryId}
                pantry={this.state.pantry}
                />
            </div>
        );
    }
}

export default PantryPage;