
const fs = require('fs');
const path = require('path');
const servicosPath = path.join('servicos.json');
let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8' });
servicos = JSON.parse(servicos);


const institucionalController = {
    index:(req,res)=>{
        return res.render("index",{title:"Gama Projeto Final"})
    },
    cadastrar:(req,res)=>{
        return res.render("cadastro-curso",{title:"Gama Projeto Final"})
    },
    listar:(req,res)=>{
        return res.render("listar-curso",{title:"Gama Projeto Final"})
    },
    admin:(req,res)=>{
        return res.render("admin-cursos",{title:"Gama Projeto Final",servicos})
    },
    salvar: (req, res) => {
        let { nome, professor, aulas, descricao  } = req.body;                                
        let id = 1
        for(i=0;id>1;i++){
            id++
        }
        //let ilustracao = request.file.filename;        
        servicos.push({ id, nome, professor, aulas, descricao });        
        let dadosJson = JSON.stringify(servicos);        
        fs.writeFileSync(servicosPath, dadosJson);        
        return res.redirect('/admin');
    },
    excluir: async (req, res) => {
        let {id} = req.params;
       // let cursoEncontrado = await Curso.destroy({where: {id}})
         let servicoEncontrado = servicos.find(servico => servico.id == id)
        return res.render('deletar-curso', { title: 'Excluir Serviço', servico: servicoEncontrado });
    },
    remover: async (req, res) => {
        let {id} = req.params;        
        //let cursoEncontrado = await Curso.destroy({where: {id}})
         let servicoIndex = servicos.findIndex((servico) => servico.id == id);
         servicos.splice(servicoIndex, 1);        
         let dadosJson = JSON.stringify(servicos);        
         fs.writeFileSync(servicosPath, dadosJson);  
        return res.redirect('/admin');
    },

    editar: (request, response) => {
        /** pegando parametro id da URL */
        let {id} = request.params;
        /** busca serviço pelo id */
        let servicoEncontrado = servicos.find(servico => servico.id == id);
        /** renderiza view e manda titulo e obj do serviço */
        return response.render('editar-curso', { titulo: 'Editar Serviços', servico: servicoEncontrado })

    },

    atualizar: (request, response) => {
       /** pegando parametro id da URL */
       let { id } = request.params;
       /** pegando informações do formulário */
       let { nome, professor, aulas, descricao  } = request.body; 
       /** busca serviço pelo id */
       let servicoEncontrado = servicos.find(servico => servico.id == id);
       
       /** atribuir os novos valores ao servicoEncontrado */
       servicoEncontrado.nome = nome;
       servicoEncontrado.professor = professor;
       servicoEncontrado.aulas = aulas;    
       servicoEncontrado.descricao = descricao;       
       
        console.log(servicoEncontrado)
       /** verifica se tem uma nova imagem antes de atribuir */
    //    if(request.file){
    //        servicoEncontrado.ilustracao = request.file.filename;
    //    }
        
        let dadosJson = JSON.stringify(servicos);        
        fs.writeFileSync(servicosPath, dadosJson);        
       /* redireciona para lista de serviços */
       return response.redirect('/admin');

    }
   
    
}


module.exports = institucionalController