const express = require('express');
const categoryController = require('../controllers/categories');
const { requireSignin, adminMiddleware } = require('../middleware');
const router = express.Router();

router.post('/category/create', requireSignin, adminMiddleware, categoryController.save);
router.get('/category/getcategory', categoryController.getCategory)

module.exports = router;