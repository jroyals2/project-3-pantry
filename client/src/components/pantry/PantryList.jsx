import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditItem from '../item/EditItem'


class PantryList extends Component {
    render() {
        return (
            <div>
                {this.props.pantry.items.map((item) => {
                    return (
                        <div key={item._id}>
                            <Link to={`/user/${this.props.userId}/pantry/${this.props.pantryId}/item/${item._id}`}><h5>{item.itemName}</h5></Link>
                            <p>QTY: {item.quantity}</p>
                            <p>Par: {item.parLevel}</p>
                            <div><button onClick={this.props.toggleEditItem}>Edit Me</button></div>
                            {this.props.editItem ? <EditItem
                                item={item}
                                handleChange={this.props.handleChange}
                                updateItem={this.props.updateItem}
                            /> : ''}
                            <div><button onClick={this.props.deleteItem} value={item._id}>delete</button></div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default PantryList;