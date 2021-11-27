const express = require("express")
const router = express.Router()
const institucionalController = require("../controllers/institucionalController")
const path= require("path")

router.get("/",institucionalController.index)
router.get("/cadastro",institucionalController.cadastrar)
router.post("/cadastro",institucionalController.salvar)

router.get("/editar/:id",institucionalController.editar)
router.put("/editar/:id", institucionalController.atualizar);


router.get("/cursos",institucionalController.listar)
router.get("/admin",institucionalController.admin)

router.get('/excluir/:id', institucionalController.excluir);
router.delete('/excluir/:id', institucionalController.remover);

//router.get('/servicos/excluir/:id', adminController.excluir);
//router.delete('/servicos/excluir/:id', adminController.remover

module.exports = router
