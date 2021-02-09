const JWT = require('jsonwebtoken')
exports.requireSignin = async(req, res, next) => {
    try {
      if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await JWT.verify(token, process.env.JWT_SECRET);
        req.user = user;
      } else {
        res.status(422).json({
          response: false,
          message: `Authorization required`
        })
      }
      next();
    } catch (err) {
      res.status(422).json({
        response: false,
        error: err.message
      })
    }
}

exports.userMiddleware = async(req, res, next) => {
  try {
    if(req.user.role !== 'user') {
      res.status(422).json({
        response: false,
        message: `User Access Denied`
      })
    }
    next();
  } catch (err) {
    res.status(422).json({
      response: false,
      error: err.message
    })
  }
}

exports.adminMiddleware = (req, res, next) => {
  try {
    if(req.user.role !== 'admin') {
      res.status(422).json({
        response: false,
        message: `Admin Access Denied`
      })
    }
    next();
  } catch (err) {
    res.status(422).json({
      response: false,
      error: err.message
    })
  }
}