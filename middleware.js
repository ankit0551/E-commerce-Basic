const passport = require('passport');
const {productSchemaValidate, reviewSchemaValidate} = require('./schema');
const Product = require('./models/Product');

const validateProduct = (req, res, next)=>{
    const {name , img, price, desc} = req.body;
    const{error} = productSchemaValidate.validate({name , img, price, desc});
    if(error){
        return res.render('error');
    }
    next();
}

const validateReview = (req, res, next)=>{
    const {rating, comment} = req.body;
    const {error} = reviewSchemaValidate.validate({rating, comment});
    if(error){
        return res.render('error');
    }
    next();
}

const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.flash('error','Please Login first.');
        return res.redirect('/login');
    }
    next();
}


const isSeller = (req, res, next)=>{
    if(!req.user.role){
        req.flash("error","You do not have the access");
        return res.redirect('/products');
    }else if(req.user.role !== 'seller'){
        req.flash('error','You do not have the permission to do that.')
        return res.redirect('/products');
    }

    next();
}

const isValidSeller = async (req,res,next)=>{
    const {id} = req.params;
    let product = await Product.findById(id);
    if(req.user._id.equals(product.author)){
        return next();
    }
    req.flash('error','You are not authorized user.');
    return res.redirect('/products');
}

module.exports = {
    validateProduct,
    validateReview,
    isLoggedIn,
    isSeller,
    isValidSeller
}