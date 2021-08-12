const boton = document.getElementById("button");

boton.addEventListener("click", ()=>{
    let resultado, mensaje;
    try{
        prevRes = document.getElementById("nota").value;
        if(isNaN(prevRes)){
            throw "It's not a number"
        }
        resultado = verificarAprobacion(8,5,prevRes);
        mensaje = definirMensaje(prevRes);
    } catch(error){
        resultado = "El valor ingresado no es un numero.";
        mensaje = "Adevertencia: Intento de hackeo identificado.";
    }
    abrirModal(resultado, mensaje);
});


const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "D";
        break;
        case 2: resultado = "D+";
        break;
        case 3: resultado = "C-";
        break;
        case 4: resultado = "C";
        break;
        case 5: resultado = "C+";
        break;
        case 6: resultado = "B-";
        break;
        case 7: resultado = "B";
        break;
        case 8: resultado = "B+";
        break;
        case 9: resultado = "A-";
        break;
        case 10: resultado = "A";
        break;
        default: resultado = null;
    }
}

const verificarAprobacion = (nota1, nota2, prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio>= 7){
        let resultado = "<span style='color: green'>"
    }
}

const abrirModal = (res, msj)=>{
    console.log(res);
    console.log(msj);
};