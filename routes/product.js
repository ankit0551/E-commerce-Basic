const Product = require('../models/Product');
const {Router} = require('express');
const router = Router();


router.get('/products',async (req,res)=>{
    allproducts = await Product.find();
    res.render('products/index',{allproducts});
})

router.get('/product/new', (req,res)=>{
    res.render('products/new')
})

router.post('/products', async (req, res)=> {
    const {name, img, price, desc} = req.body;
    await Product.create({name, img, price, desc});
    res.redirect('/products');
})


router.get('/products/:id', async (req,res)=>{
    const item = await Product.findById(req.params.id);
    res.render('products/show',{item});
})

router.get('/products/:id/edit', async (req,res)=>{
    const {id} = req.params;
    const item = await Product.findById(id);
    res.render('products/edit',{item})
})

router.patch('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const {name, img, price, desc} = req.body;
    await Product.findByIdAndUpdate(id, {name, img, price, desc});
    res.redirect(`/products/${id}`);
})
 

router.delete('/product/delete/:id', async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



module.exports = router;