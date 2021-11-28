const form = document.getElementById("form")
const nome = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")

form.addEventListener("submit",(e)=>{    
    e.preventDefault()
    if(nome.value === "" || email.value === "" || message.value === "") {
        inputRequerido()
    } else {
            enviarMail(nome.value,email.vale,message.value)
            success()            
            e.target.reset()
        }
    })

function enviarMail(nome,email,msg){
    emailjs.sendForm('service_mtp4znu', 'template_1ic0a2b', form, 'user_r6K1j95WsgS5KesJHUScn',{
           to_name: nome,
          from_name: email,
          message: msg,
    })    
};

function success() {
    Swal.fire({
      icon: "success",
      title: "Parabéns!",
      text: "Recebemos sua mensagem"      
    });
}

function inputRequerido() {
    Swal.fire({
      icon: "error",
      title: "Oops, algo deu errado...",
      text: "Todos os campos devem ser preenchidos"
    });
}
