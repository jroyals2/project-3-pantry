import React, { Component } from 'react';

class EditItem extends Component {
    render() {
        return (
            <div>
                <h1>Qty: {this.props.item.quantity}</h1>
            </div>
        );
    }
}

export default EditItem;