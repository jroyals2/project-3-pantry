import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditItem from '../item/EditItem'
import styled from 'styled-components'
const ItemsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const ButtonEditAdd = styled.button`
background-color: black;
color: white;
border-radius: 10px;
`
const ButtonDelete = styled.button`
background-color: grey;
color: black;
border-radius: 10px;
`
class PantryList extends Component {
    render() {
        return (
            <div>
                {this.props.pantry.items.map((item) => {
                    return (
                        <ItemsWrapper key={item._id}>
                            <h3>{item.itemName}</h3>
                            <p>QTY: {item.quantity}</p>
                            <p>Par: {item.parLevel}</p>
                            <div><ButtonEditAdd onClick={this.props.toggleEditItem}>Edit Me</ButtonEditAdd></div>
                            {this.props.editItem ? <EditItem
                                item={item}
                                handleChange={this.props.handleChange}
                                updateItem={this.props.updateItem}
                            /> : ''}
                            <div><ButtonDelete onClick={this.props.deleteItem} value={item._id}>delete</ButtonDelete></div>
                        </ItemsWrapper>
                    )
                })}
            </div>
        );
    }
}

export default PantryList;