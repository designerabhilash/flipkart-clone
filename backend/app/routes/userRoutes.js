const express =  require("express")
const router = express.Router();
const signupController = require("../controllers/users");
const { validateSignupRequest, validateSigninRequest, isRequestValidated} = require('../validators/users')

router.post("/signup", validateSignupRequest, isRequestValidated, signupController.save);
router.post("/signin", validateSigninRequest, isRequestValidated, signupController.signin)

module.exports = router;