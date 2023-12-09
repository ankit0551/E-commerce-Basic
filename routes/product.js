const Product = require('../models/Product');
const {Router} = require('express');
const router = Router();
const {validateProduct} = require('../middleware');


router.get('/products',async (req,res)=>{
    try{
        allproducts = await Product.find();
        res.render('products/index',{allproducts});
    }catch(err){
        res.status(500).render('error')
    }

})

router.get('/product/new', (req,res)=>{
    try{
        res.render('products/new')
    }catch(err){
        res.status(500).render('error')
    }

})

router.post('/products', validateProduct ,async (req, res)=> {
    try{
        const {name, img, price, desc} = req.body;
        await Product.create({name, img, price, desc});
        req.flash('success','Product added Successfully');
        res.redirect('/products');
    }catch(err){
        res.status(500).render('error')
    }

})


router.get('/products/:id', async (req,res)=>{
    try{
        const item = await Product.findById(req.params.id).populate('reviews');
        res.render('products/show',{item, msg:req.flash('success')});
    }catch(err){
        res.status(500).render('error')
    }

})

router.get('/products/:id/edit', async (req,res)=>{
    try{
        const {id} = req.params;
        const item = await Product.findById(id);
        res.render('products/edit',{item})
    }catch(err){
        res.status(500).render('error')
    }

})

router.patch('/products/:id', validateProduct ,async (req, res)=>{
    try{
        const {id} = req.params;
        const {name, img, price, desc} = req.body;
        await Product.findByIdAndUpdate(id, {name, img, price, desc});
        req.flash('success', 'Product edited successfully');
        res.redirect(`/products/${id}`);
    }catch(err){
        res.status(500).render('error')
    }

})



router.delete('/product/delete/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        req.flash('success','Product Deleted Successfully');
        res.redirect('/products');
    }catch(err){
        res.status(500).render('error')
    }
    
})





module.exports = router;