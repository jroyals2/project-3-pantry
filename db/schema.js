const mongoose = require('mongoose')

// This will be the items schema nested in the Pantry Schema
const ItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: [true, "Must have a name"]
    },
    quantity: Number,
    parLevel: Number

})
// This will be the schema for the pantry nested inside the user schema
const PantrySchema = mongoose.Schema({
    pantryName: {
        type: String,
        required: true
    },
    location: String,
    items: [ItemSchema]
})
const GroceryList = mongoose.Schema({
    item: String,
    qty: Number
})
// This will be the master schema 
const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    pantry: [PantrySchema],
    groceryList: [GroceryList]

})

const Item = mongoose.model("Item", ItemSchema)
const Pantry = mongoose.model("Pantry", PantrySchema)
const User = mongoose.model("User", UserSchema)


module.exports= {
    Item, Pantry, User
}