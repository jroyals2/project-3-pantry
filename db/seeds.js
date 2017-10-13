require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Pantry, Item } = require('./schema')

const ramen = new Item ({
    itemName: 'Chicken Flavored Ramen',
    quantity: 6,
    parLevel: 4
})

const potatoChips = new Item ({
    itemName: 'Cheddar and Sour Cream Ruffles',
    quantity: 2,
    parLevel: 1,
})

const tomatoSoup = new Item ({
    itemName: "Campbell's Tomato Soup",
    quantity: 5,
    parLevel: 3
})

const bread = new Item ({
    itemName: 'WonderBread',
    quantity: 2,
    parLevel: 1
})

const kitchen = new Pantry ({
    pantryName: 'Main Pantry',
    location: 'Kitchen',
    items: [ramen, potatoChips, tomatoSoup, bread]
})

const sally = new User ({
    userName: 'Sally May',
    password: 'donthate',
    pantry: [kitchen]
})

User.remove({})
.then(() => sally.save()) 
.then(() => console.log("Successful"))
.then(() => mongoose.connection.close())