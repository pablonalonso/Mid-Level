const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("boton");
const mensaje = document.querySelector(".mensaje")

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    let x = validarDatos();
    if(x[0]){
        mensaje.innerHTML = x[1]
        mensaje.classList.add("red");
    } else{
        mensaje.innerHTML = "Datos enviados con exito";
        mensaje.classList.add("green");
        mensaje.classList.remove("red"); 
    }
})

validarDatos = ()=>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = "Nombre inválido";
        return error;
    }
    else if(email.value.length < 5 || email.value.length > 40 ||
            email.value.indexOf("@") == -1 ||  email.value.indexOf(".") == -1){
            error[0] = true;
            error[1] = "Email invalido"
            return error;
        }
    else if(materia.value.length < 5 || materia.value.length > 40){
        error[0] = true;
        error[1] = "Materia invalida";
        return error;
    }

    error[0] = false;
    return error;

}