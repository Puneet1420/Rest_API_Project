const express = require("express")
const {createuser} = require("../controlers/user.controlers")
const router = express.Router();

router.post("/createuser" , createuser)

module.exports = router