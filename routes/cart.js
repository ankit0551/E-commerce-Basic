const {Router} = require('express');
const router = Router();
const Product = require('../models/Product')
const User = require('../models/User');
const {isLoggedIn} = require('../middleware');


router.get('/user/cart',isLoggedIn, async (req, res)=>{
    let user = await User.findById(req.user._id).populate('cart');
    let cart = user.cart;
    res.render('cart/cart',{cart})
})


router.post('/user/:productId',isLoggedIn, async (req,res)=>{
    const{productId} = req.params;
    const userId = req.user._id;
    let product = await Product.findById(productId);
    let user = await User.findById(userId);
    user.cart.push(product);
    user.save();
    res.redirect('/user/cart');
})





module.exports = router;