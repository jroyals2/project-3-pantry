import React, { Component } from 'react';
import axios from 'axios'


class PantryPage extends Component {
    state = {
        pantry: {
            pantryName: '',
            location: '',
            items: []
        }
    }

    async componentWillMount(){
        const { userId, pantryId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/pantry/${pantryId}`)
    }
    render() {
        return (
            <div>
                <h1>yikes</h1>
            </div>
        );
    }
}

export default PantryPage;