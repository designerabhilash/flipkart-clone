// const multer = require('multer');
// const shortid = require('shortid');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(path.dirname(__dirname), 'upload'));
//     },
//     filename: (req, file, cb) => {
//         cb(null, shortid.generate() + '-' + file.originalname.toLowerCase());
//     }
// });

// module.exports = multer({
//     storage,
//     fileFilter: function (req, file, cb) {
//         var ext = path.extname(file.originalname).toLowerCase();
//         if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//             return cb(new Error('Please upload a valid image file'));
//         }
//         cb(null, true)
//     },
// });
