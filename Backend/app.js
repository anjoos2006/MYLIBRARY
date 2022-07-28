const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv/config');

const booksRoute = require('./routes/books.js');
const usersRoute = require('./routes/users.js');

const app= express();

const PORT = 3000;

//CORS middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname,'public')));

// Bodyparser middleware
app.use(bodyParser.json());

// app.use('/books',booksRoute);
app.use('/users',usersRoute);

// Connect to DB
mongoose.connect(process.env.dbUrl, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log("Connected to DB")
});

mongoose.connection.on('error', () => {
    console.log("DB error" + error)
});

app.listen(PORT,() => {
    console.log('Server started on port' +PORT);

})