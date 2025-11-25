precio = 400000

let precioInicial = document.querySelector(".precio-inicial");
let cantidad = document.querySelector(".cantidad");
let valorTotal = document.querySelector(".valor-total");


precioInicial.innerHTML = precio;


let cantidadActual = 1;


valorTotal.innerHTML = precio * cantidadActual;



function sumar() {
    cantidadActual++;
    cantidad.innerHTML = cantidadActual;
    valorTotal.innerHTML = precio * cantidadActual;
}

function restar() {
    if (cantidadActual > 1) {
        cantidadActual--;
        cantidad.innerHTML = cantidadActual;
        valorTotal.innerHTML = precio * cantidadActual;
    }
}