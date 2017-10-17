require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const usersController = require('./routes/UsersController');
const pantryController = require('./routes/PantryController')
const itemsController = require('./routes/ItemsController')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 
app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json());
app.use('/api/users', usersController)
app.use('/api/users/:userId/pantry', pantryController)
app.use('/api/users/:userId/pantry/:pantryId/item', itemsController)
app.get('/', (req,res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})