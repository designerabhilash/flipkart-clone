const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
    check('firstname')
    .notEmpty()
    .withMessage('Firstname is required'),
    check('lastname')
    .notEmpty()
    .withMessage('Lastname is required'),
    check('email')
    .isEmail()
    .withMessage('Email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password is required and must be 6 Character long')
]

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password is required and must be 6 Character long')
]

exports.isRequestValidated = async(req, res, next) => {
    const errors = await validationResult(req);
    if(errors.array().length > 0) {
        return res.status(422).json({
        errors: errors.array()[0].msg
    })}
    next();
}