const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const exp = require('constants');
const productRouter = require('./routes/product/product');


mongoose.connect("mongodb://127.0.0.1:27017/ecomDB")
.then(()=>{
    console.log("DB is Connected");
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json);
app.use(express.urlencoded({extended: true}));




app.use(productRouter);


app.listen(8080,()=>{
    console.log("Server is started at Port: 8080");
})