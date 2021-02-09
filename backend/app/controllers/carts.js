const Cart = require('../models/cart');

exports.save = (req, res, next) => {
    try {
        const cart = new Cart({
            user: req.user._id,
            cartItems: req.body.cartItems
        })
        cart.save((error, cart) => {
            if(error) {
                return res.status(422).json({
                    response: false,
                    error: error
                })
            }
            if(cart) {
                return res.status(422).json({
                    response: false,
                    cart
                })
            }
        })
    } catch (err) {
        return res.status(422).json({
            response: false,
            error: err.message
        })
    }
}