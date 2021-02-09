const Category = require('../models/category')
const slugify = require('slugify');

let createCategories = (categories, parentId = null) => {
    const categoryList = [];
    let category;
    if(parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    }

    for(let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: createCategories(categories, cate._id)
        })
    }
    return categoryList
}

exports.save = async(req, res, next) => {
    try {
        const categoryObj = {
            name: req.body.name,
            slug: slugify(req.body.name)
        }

        if(req.body.parentId) {
            categoryObj.parentId = req.body.parentId
        } 
        
        await new Category(categoryObj).save((error, category) => {
            if(error) {
                res.status(422).json({
                    response: false,
                    error: error.message
                })
            }
            if(category) {
                res.status(201).json({
                    response: true,
                    category: category,
                    msg:  `Category Created Successfully`
                })
            }
        });
    } catch (err) {
        res.status(422).json({
            response: false,
            error: err.message
        })
    }
} 

exports.getCategory = async(req, res) => {
    try {
        const fetchCategory = await Category.find({})
        const categoryList = createCategories(fetchCategory)
        res.status(200).json({
            response: true,
            categoryList
        });
    } catch (err) {
        res.status(422).json({
            response: false,
            error: err.message
        })
    }
}