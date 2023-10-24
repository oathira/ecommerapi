// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/productRoutes'));

// starting the server
app.listen(3000, function(){
    console.log('Server is connected to port 3000');
});