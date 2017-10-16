import React, { Component } from 'react';

class PantryForm extends Component {
    state ={
        newPantry: {
            pantryName: '',
            location: ''
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const newPantry = {...this.state.newPantry}
        newPantry[attribute] = event.target.value
        console.log("Cha cha change!")
        this.setState({newPantry})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.createNewPantry(this.state.newPantry)
        const emptyForm = {
        pantryName: '',
        location: '',
        }
        this.setState({newPantry: emptyForm})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="pantryName">Pantry Name</label>
                    <input onChange={this.handleChange} type="text" name="pantryName" value={this.state.newPantry.pantryName}/>
                </div>                
                <div>
                    <label htmlFor="location">Location</label>
                    <input onChange={this.handleChange} type="text" name="location" value={this.state.newPantry.location}/>
                </div>
                <button type="submit">Add A Pantry</button>
            </form>
            </div>
        );
    }
}

export default PantryForm;