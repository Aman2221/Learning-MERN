const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
dotenv.config({path : './config.env'});
app.use(require('./server/router'))
require('./server/conn')

const User = require('./server/UserSchema')
const port = process.env.PORT || 8000 ;

const middleware = ( req,res,next) => {
    console.log('MiddleWare');
    next();
}

app.listen(port , () => {
    console.log('server created successfully');
})