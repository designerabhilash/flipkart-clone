const User = require("../../models/User");
var JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.save = async (req, res, next) => {
    try {
        bcrypt.hash(req.body.password, 10, async function (err, hashed) {
            if(err) {
                res.status(422).json({response: false,error: err.message});
            } else {
                let user = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hashed,
                    contactNumber: req.body.contactNumber,
                    username: Math.random().toString(),
                    role: 'admin'
                };
                try {
                    await new User(user).save();
                    res.status(200).json({
                        data: user,
                        message: `Admin Account has been Successfully Created.`
                    });

                } catch (err) {
                    res.status(422).json({
                        response: false,
                        error: err.message
                    })
                }
            }
        })
    } catch (err) {
        res.status(422).json({response: false,error: err.message
        })
    }
}

exports.signin = async (req, res, next) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      let comp =  bcrypt.compareSync(req.body.password, user.password);
      if (comp && user.role === 'admin') {
        JWT.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "60min" },
          function (err, encoded) {
            if (err) {
              res.status(422).json({
                response: false,
                error: err.message,
              });
            } else {
              res.status(200).json({
                token: encoded,
                user: user,
                message: "Admin logged in Successfully",
              });
            }  
          }
        );
      } else {
        res.status(422).json({
          response: false,
          message: "Email/Password is incorrect.",
        });
      }
    }
  } catch (err) {
    res.status(422).json({
      response: false,
      error: err.message,
    });
  }
};