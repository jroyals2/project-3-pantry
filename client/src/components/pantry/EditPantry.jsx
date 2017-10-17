import React, { Component } from 'react';

class EditPantry extends Component {
    render() {
    const handleChange = (event) => {
    this.props.handleChange(event, this.props.pantry._id)
    }
    const updatePantry = () => {
    this.props.updatePantry(this.props.pantry._id)
    }
        return (
            <div>
                    <label htmlFor="pantryName">Pantry Name: </label>
                    <input onBlur={updatePantry} onChange={handleChange} name="pantryName" value={this.props.pantry.pantryName} />
                    <label htmlFor="location">location</label>
                    <input onBlur={updatePantry} onChange={handleChange} name="location" value={this.props.pantry.location}/>  
            </div>
        );
    }
}

export default EditPantry;