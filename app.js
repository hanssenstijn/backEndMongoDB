const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middlewares (define functions when a route is being clicked)
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// });
// Every time router is clicked this function runs (when you dont define a path)
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Define Routes
app.get('/', (req,res) => {
    res.send('Home');
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Connected to DB'));
 
// define port to listen to
app.listen(5000);