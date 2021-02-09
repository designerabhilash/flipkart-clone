const express = require('express');
const categoryController = require('../controllers/products');
const { requireSignin, adminMiddleware } = require('../middleware');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPictures'), categoryController.save);
// router.get('/category/getcategory', categoryController.getCategory)

module.exports = router;