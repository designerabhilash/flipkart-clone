const Product = require('../models/product');
const slugify = require('slugify');
const shortid = require('shortid')

exports.save = async(req, res, next) => {
    try {
        const { name, price, description, category, quantity, createdBy } = req.body;
        let productPictures = [];

        if(req.files.length > 0) {
            productPictures = req.files.map(file => {
                return { img: file.filename };
            });
        }

        const product = await new Product({
            name: name,
            slug: slugify(name),
            price,
            description,
            quantity,
            productPictures,
            category,
            createdBy: req.user._id
        })
        product.save((error, product) => {
            if(error) {
                res.status(422).json({ 
                    response: false,
                    error: error
                 })
            } 
            if(product) {
                res.status(201).json({
                    response: true,
                    product: product,
                    message: `Product Created Successfully`
                })
            }
        })
    } catch (err) {
        res.status(422).json({
            response: false,
            error: err.message
        })
    }
}