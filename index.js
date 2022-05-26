const express = require('express');
var mongoose = require('mongoose');
const product = require('./controllers/product');
const sellerProfile = require('./controllers/sellerProfile')
var cors = require('cors')
const dotenv = require("dotenv");

const app = express();

mongoose.connect('mongodb+srv://test1:test123@cluster0.y7pze.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch((err)=>console.log(err));

app.use(express.json());
app.use(cors())

product(app);
sellerProfile(app);

app.listen(process.env.PORT||3000);
console.log('You are listening to port 5000');
