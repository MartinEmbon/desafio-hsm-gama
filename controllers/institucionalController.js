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
        return res.render("admin-cursos",{title:"Gama Projeto Final"})
    },
    
}


module.exports = institucionalController