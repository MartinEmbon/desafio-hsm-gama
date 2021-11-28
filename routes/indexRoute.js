const express = require("express")
const router = express.Router()
const institucionalController = require("../controllers/institucionalController")
const path= require("path")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {        
        cb(null, path.join('uploads'));
    },    
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get("/",institucionalController.index)
router.get("/cursos",institucionalController.listaCursos)
router.get("/admin",institucionalController.exibirCurso)

router.get("/cadastro",institucionalController.cadastrar)
router.post("/cadastro",upload.single('ilustracao'),institucionalController.criarCurso)

router.get("/editar/:id",institucionalController.editar)
router.put("/editar/:id", institucionalController.atualizarCurso);


router.get('/excluir/:id', institucionalController.excluir);
router.delete('/excluir/:id', institucionalController.deletarCurso);



module.exports = router
