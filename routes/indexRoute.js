const express = require("express")
const router = express.Router()
const institucionalController = require("../controllers/institucionalController")
const path= require("path")
const multer = require('multer'); // chama modulo multer (upload)


const storage = multer.diskStorage({
    /** destino do upload */
    destination: (req, file, cb) => {
        /** guarda arquivos na pasta /uploads */
        cb(null, path.join('uploads'));
    },
    /** nome do upload */
    filename: (req, file, cb) => {
        /** salva arquivo com nome do campo + data e hora + extensão */
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

/** usando configuração como storage do multer */
const upload = multer({ storage: storage });

router.get("/",institucionalController.index)
router.get("/cadastro",institucionalController.cadastrar)
router.post("/cadastro",upload.single('ilustracao'),institucionalController.salvar)

router.get("/editar/:id",institucionalController.editar)
router.put("/editar/:id", institucionalController.atualizar);


router.get("/cursos",institucionalController.listar)
router.get("/admin",institucionalController.admin)

router.get('/excluir/:id', institucionalController.excluir);
router.delete('/excluir/:id', institucionalController.remover);

//router.get('/servicos/excluir/:id', adminController.excluir);
//router.delete('/servicos/excluir/:id', adminController.remover

module.exports = router
