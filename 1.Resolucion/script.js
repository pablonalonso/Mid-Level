let width = window.screen.width;
let height = window.screen.height;

resolution1 = confirm(`Resolucion: ${width} x ${height}`);

if(resolution1){
    alert("Compra realizada con exito.");
}else{
    alert("Compra cancelada.");
}