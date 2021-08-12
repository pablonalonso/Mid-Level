const container = document.querySelector(".grid-container");
const boton = document.querySelector(".confirmar-btn");

let alumnos = [
    {   nombre: "Enzo Alarcon",
        email: "enzoalarconlb@gmail.com",
        materia: "Biologia"
    },
    {   nombre: "Enzo Gauna",
        email: "gaunaenzo@gmail.com",
        materia: "Matematica"
    },
    {   nombre: "Franco Rios",
        email: "francorios@gmail.com",
        materia: "Quimica"
    },
    {   nombre: "Diego Zalazar",
        email: "diegozalazar@gmail.com",
        materia: "Historia"
    },
    {   nombre: "Diego Zalazar",
        email: "diegozalazar@gmail.com",
        materia: "Historia"
    },
    {   nombre: "Diego Zalazar",
        email: "diegozalazar@gmail.com",
        materia: "Historia"
    },
    {   nombre: "Diego Zalazar",
        email: "diegozalazar@gmail.com",
        materia: "Historia"
    },
    {   nombre: "Diego Zalazar",
        email: "diegozalazar@gmail.com",
        materia: "Historia"
    },
    {   nombre: "Diego Zalazar",
        email: "diegozalazar@gmail.com",
        materia: "Historia"
    },
    {   nombre: "Lionel Messi",
        email: "lionelmessi@gmail.com",
        materia: "Lengua"
    }
]

let htmlCode = "";

for(alumno in alumnos){
   let datos = alumnos[alumno];
   let nombre = datos["nombre"];
   let email = datos["email"];
   let materia = datos["materia"];
   htmlCode += `
   <div class="grid-item nombre">
        ${nombre}
    </div>
    <div class="grid-item email">
        ${email}
    </div>
    <div class="grid-item materia">
        ${materia}
    </div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
            <option value="Semana 3">Semana 3</option>
            <option value="Semana 4">Semana 4</option>
            <option value="Semana 5">Semana 5</option>
        </select>
    </div> `;
    
}

container.innerHTML = htmlCode;

boton.addEventListener("click", ()=>{
    let confirmar = confirm("¿Esta seguro que desea confirmar?");
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
    }
    }
})