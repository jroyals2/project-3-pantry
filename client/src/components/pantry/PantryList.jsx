import React, { Component } from 'react';

class PantryList extends Component {
    render() {
        return (
            <div>
                {this.props.pantry.items.map((item) => {
                    return(
                        <div key={item._id}>
                        <h5>{item.itemName}</h5>
                        <p>QTY: {item.quantity}</p>
                        <p>Par: {item.parLevel}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default PantryList;