const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const cpass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("Warnings")
var boton = document.getElementById("boton")
var input = document.getElementById("contraseña")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let Warnings = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    parrafo.innerHTML = ""
    
    if(nombre.value.length <6){
        Warnings += 'El nombre no es valido <br>'
       entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        Warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(pass.value.length <8){
        Warnings += 'La contraseña no es valida <br>'
        entrar = true
   
    }
    
    if(entrar){
        parrafo.innerHTML = Warnings
        
    }else{
        parrafo.innerText = "Usuario registrado"
        function limpiar() {
            document.getElementById("").value = "";
        }
    }
     boton.addEventListener('click', mostrarContraseña);
      
     function mostrarContraseña(){
         if(input.type == "password"){
             input.type = "text";
         }
     }
})
