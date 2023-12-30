const {Router} = require('express');
const router = Router();
const Review = require('../models/Review');
const Product = require('../models/Product');
const {validateReview, isLoggedIn} = require('../middleware');



router.post('/review/:id',isLoggedIn, validateReview ,async (req, res)=>{
    try{
    let {id} = req.params;
    let {rating, comment} = req.body;
    
    const product = await Product.findById(id)
    const newReview = await Review.create({rating, comment});
    product.reviews.push(newReview);
    await product.save();
    req.flash('success' , 'Review added Successfuly');
    res.redirect(`/products/${id}`)
    }catch(err){
        res.status(500).render('error')
    }
    
})



module.exports = router;