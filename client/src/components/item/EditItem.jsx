import React, { Component } from 'react';

class EditItem extends Component {
    render() {
        const handleChange = (event) => {
            this.props.handleChange(event, this.props.item._id)
        }
        const updateItem = () => {
            this.props.updateItem(this.props.item._id)
        }
        return (
            <div>

                <div>
                    <label htmlFor="itemName">Item Name: </label>
                    <input onBlur={updateItem} onChange={handleChange} name="itemName" value={this.props.item.itemName} />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input onBlur={updateItem} onChange={handleChange} name="quantity" value={this.props.item.quantity} />
                </div>
                <div>
                    <label htmlFor="parLevel">Par Level</label>
                    <input onBlur={updateItem} onChange={handleChange} name="parLevel" value={this.props.item.parLevel} />
                </div>
            </div>
        );
    }
}

export default EditItem;