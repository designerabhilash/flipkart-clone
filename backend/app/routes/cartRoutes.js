const express = require('express');
const categoryController = require('../controllers/carts');
const { requireSignin, userMiddleware } = require('../middleware');
const router = express.Router();

router.post('/user/cart/addtocart', requireSignin, userMiddleware, categoryController.save);

module.exports = router;