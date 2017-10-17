import React, { Component } from 'react';

class NewItem extends Component {
    state ={
        newItem: {
            itemName: '',
            quantity: 0,
            parLevel: 0
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const newItem = {...this.state.newItem}
        newItem[attribute] = event.target.value
        console.log("Cha cha change!")
        this.setState({newItem})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.createNewItem(this.state.newItem)
        const emptyForm = {
        itemName: '',
        quantity: 0,
        parLevel: 0
        }
        this.setState({newItem: emptyForm})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="itemName">Item Name</label>
                    <input onChange={this.handleChange} type="text" name="itemName" value={this.state.newItem.itemName}/>
                </div>                
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={this.handleChange} type="number" name="quantity" value={this.state.newItem.quantity}/>
                </div>
                <div>
                    <label htmlFor="parLevel">Par Level</label>
                    <input onChange={this.handleChange} type="number" name="parLevel" value={this.state.newItem.parLevel}/>
                </div>
                <button type="submit">Add the item!</button>
            </form>
            </div>
        );
    }
}


export default NewItem;