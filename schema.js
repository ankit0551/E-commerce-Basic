const joi = require('joi');

const productSchemaValidate = joi.object({
    name : joi.string().required(),
    img : joi.string().required(),
    price : joi.number().min(0).required(),
    desc : joi.string().required(),
});


const reviewSchemaValidate = joi.object({
    rating : joi.number().min(0).max(5).required(),
    comment : joi.string().required(),
})


module.exports = {
    productSchemaValidate,
    reviewSchemaValidate
}