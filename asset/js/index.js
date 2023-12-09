const precio = 400000

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
const cantidadSpan = document.querySelector(".cantidad")
const totalSpan = document.querySelector(".valor-total")
const sumarbtn = document.querySelector("sumar")
const restarbtn = document.querySelector("restar")
const articulos = document.querySelector(".articulos")

let cantidad = 0
let total = 0

function sumar() {
cantidad++
cantidadSpan.innerHTML = cantidad
total = cantidad * precio
totalSpan.textContent = total

}
function restar (){
    if (cantidad > 0) {
        cantidad--
        cantidadSpan.innerHTML = cantidad
        total = cantidad * precio
        totalSpan.innerHTML = total

    }
}
function numArticulos () {
articulos.innerHTML = cantidad
}
