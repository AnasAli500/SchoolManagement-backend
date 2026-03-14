const express = require("express")

const LoginControllers = require("../controllers/LoginControllers")

const router = express.Router()

router.post("/create/Register",LoginControllers.createRegister)
router.post("/create/Login",LoginControllers.createLoging)

module.exports = router