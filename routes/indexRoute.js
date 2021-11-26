const express = require("express")
const router = express.Router()
const institucionalController = require("../controllers/institucionalController")

router.get("/",institucionalController.index)

module.exports = router
