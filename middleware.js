const {productSchemaValidate, reviewSchemaValidate} = require('./schema');

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

module.exports = {
    validateProduct,
    validateReview
}