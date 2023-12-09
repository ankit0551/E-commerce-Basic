const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const exp = require('constants');
const seed = require('./seedDB');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');


const reviewRoutes = require('./routes/review');
const productRouter = require('./routes/product');



mongoose.connect("mongodb://127.0.0.1:27017/ecomDB")
.then(()=>{
    console.log("DB is Connected");
})
.catch((err)=>{
    console.log(err);
})





let configSession = {
    secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}


app.engine('ejs',engine);
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session(configSession));
app.use((req, res, next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');

    next();
})




// seed(); 
app.get('/',(req,res)=>{
    res.redirect('/products');
})



app.use(productRouter);
app.use(reviewRoutes);


app.listen(8080,()=>{
    console.log("Server is started at Port: 8080");
})