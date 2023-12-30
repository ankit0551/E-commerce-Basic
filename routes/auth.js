const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const passport = require('passport');
const {isLoggedIn} = require('../middleware');


router.get('/register', (req, res)=>{
    res.render('auth/signup');
})

router.post('/register', async (req, res)=> {
    try{
        const {username , email, password , role} = req.body;
        const user = new User({username, email, role});
        const newUser = await User.register(user,password);
    req.login(newUser, (err)=>{
        if(err){
            return next(err);
        }
        req.flash('success','Welcome')
        res.redirect('/products');
    })
    }catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
    
})


router.get('/login',(req,res)=>{
    res.render('auth/login');
})

router.post('/login' ,
    passport.authenticate('local',{
        failureRedirect : '/login',
        failureMessage : true
    }) ,(req,res)=>{
    
        req.flash('success','Logged in Successfully.')
        res.redirect('/products');
})

router.get('/logout',isLoggedIn,(req,res)=>{
    req.logout((err)=>{
        if(err){
            return res.render('error');
        }
        req.flash('success','Logged out successfully.')
        res.redirect('/products');
    })
})




module.exports = router;