// DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');
const db = require('./models'); 
const path = require('path');

//CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CONTROLLERS
db.sequelize.sync().then(() => {
    console.log('Database connection established.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const booksController = require('./controllers/books_controller');
app.use('/api/books', booksController);

//LISTEN
app.listen(4005, () => {
    console.log(`Server is running on port 4005`);
});