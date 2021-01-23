var express = require('express');
var router = express.Router();
const { registerView , registerNewUser } = require("../controller/RegisterController")
const { validateRegister,checkEmailUnique } = require("../middlewares/validator")


/* GET home page. */

router.route("/")
.get(registerView)
.post(checkEmailUnique, registerNewUser)


module.exports = router;
