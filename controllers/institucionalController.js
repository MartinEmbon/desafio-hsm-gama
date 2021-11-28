const fs = require('fs');
const path = require('path');
const cursosPath = path.join('cursos.json');
const { uuid } = require("uuidv4")


let cursos = fs.readFileSync(cursosPath, { encoding: 'utf-8' });
cursos = JSON.parse(cursos);


const institucionalController = {
    index:(req,res)=>{
        return res.render("index",{title:"Gama Projeto Final"})
    },
    cadastrar:(req,res)=>{
        return res.render("cadastro-curso",{title:"Gama Projeto Final"})
    },
    listar:(req,res)=>{
        return res.render("listar-curso",{title:"Gama Projeto Final", cursos})
    },
    admin:(req,res)=>{
        return res.render("admin-cursos",{title:"Gama Projeto Final",cursos})
    },
    salvar: (req, res) => {
        let { nome, professor, aulas, descricao  } = req.body;                                        
        let ilustracao = req.file.filename;        
        cursos.push({ id: uuid(), nome, professor, aulas, descricao, ilustracao });        
        let dadosJson = JSON.stringify(cursos);        
        fs.writeFileSync(cursosPath, dadosJson);        
        return res.redirect('/admin');
    },
    excluir: async (req, res) => {
        let {id} = req.params;       
        let cursoEncontrado = cursos.find(curso => curso.id == id)
        return res.render('deletar-curso', { title: 'Excluir Serviço', curso: cursoEncontrado });
    },
    remover: async (req, res) => {
        let {id} = req.params;                
         let cursoIndex = cursos.findIndex((curso) => curso.id == id);
         cursos.splice(cursoIndex, 1);        
         let dadosJson = JSON.stringify(cursos);        
         fs.writeFileSync(cursosPath, dadosJson);  
        return res.redirect('/admin');
    },

    editar: (request, response) => {        
        let {id} = request.params;        
        let cursoEncontrado = cursos.find(curso => curso.id == id);
        /** renderiza view e manda titulo e obj do serviço */
        return response.render('editar-curso', { titulo: 'Editar Serviços', curso: cursoEncontrado })

    },

    atualizar: (request, response) => {
       
       let { id } = request.params;
       
       let { nome, professor, aulas, descricao  } = request.body; 
       
       let cursoEncontrado = cursos.find(curso => curso.id == id);
       
       /** atribuir os novos valores ao servicoEncontrado */
       cursoEncontrado.nome = nome;
       cursoEncontrado.professor = professor;
       cursoEncontrado.aulas = aulas;    
       cursoEncontrado.descricao = descricao;       
               
       /** verifica se tem uma nova imagem antes de atribuir */
        if(request.file){
            cursoEncontrado.ilustracao = request.file.filename;
        }        
        let dadosJson = JSON.stringify(cursos);        
        fs.writeFileSync(cursosPath, dadosJson);        
       /* redireciona para lista de serviços */
       return response.redirect('/admin');
    }       
}


module.exports = institucionalController