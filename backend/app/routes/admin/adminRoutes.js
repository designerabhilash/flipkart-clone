const express =  require("express")
const router = express.Router();
const signupController = require("../../controllers/admin/admin");
const { validateSignupRequest, validateSigninRequest, isRequestValidated} = require('../../validators/users')

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signupController.save);
router.post("/admin/signin", validateSigninRequest, isRequestValidated, signupController.signin)

module.exports = router;