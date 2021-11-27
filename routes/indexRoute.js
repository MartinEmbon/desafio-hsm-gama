const express = require("express")
const router = express.Router()
const institucionalController = require("../controllers/institucionalController")

router.get("/",institucionalController.index)
router.get("/cadastro",institucionalController.cadastrar)
router.get("/cursos",institucionalController.listar)
router.get("/admin",institucionalController.admin)

module.exports = router
