// Funciones para almacenar y traer los datos que se almacenan
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
let productos = obtenerAlmacenamientoLocal('productos') || [];

// Variables que traemos de nuestro html
const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const contenedor = document.getElementById('contenedor');
const carrito = document.getElementById('carrito');
const numero = document.getElementById("numero");
const header = document.querySelector("#header");
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x')

// Variables que vamos a usar en nuestoro proyecto
let lista = []
let valortotal = 0

// Scroll de nuestra pagina
window.addEventListener("scroll", function () {
    if (contenedor.getBoundingClientRect().top < 10) {
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
})


window.addEventListener('load', () => {
    visualizarProductos();
    contenedorCompra.classList.add("none")
})

function visualizarProductos() {
    contenedor.innerHTML = ""
    adicional = ""
    for (let i = 0; i < productos.length; i++) {
        if(productos[i]._talla != undefined){
            adicional = `<p>Talla: ${productos[i]._talla}</p>`
        } else if (productos[i]._caducidad != undefined){
            adicional = `<p>Caducidad: ${productos[i]._caducidad}</p>`
        }

        if (productos[i]._existencia > 0) {
            contenedor.innerHTML += `<div><img src="${productos[i]._urlImagen}"><div class="informacion"><p>${productos[i]._nombre}</p><p class="precio">$${productos[i]._valor}</p>${adicional}<button onclick=comprar(${i})>Comprar</button></div></div>`
        }
        else {
            contenedor.innerHTML += `<div><img src="${productos[i]._urlImagen}"><div class="informacion"><p>${productos[i]._nombre}</p><p class="precio">$${productos[i]._valor}</p><p class="soldOut">Sold Out</p></div></div>`
        }
    }
}

function comprar(indice) {
    lista.push({ nombre: productos[indice]._nombre, precio: productos[indice]._valor })

    let van = true
    let i = 0
    while (van == true) {
        if (productos[i]._nombre == productos[indice]._nombre) {
            productos[i]._existencia -= 1
            if (productos[i]._existencia == 0) {
                visualizarProductos()
            }
            van = false
        }
        guardarAlmacenamientoLocal("productos", productos)
        i += 1
    }
    numero.innerHTML = lista.length
    numero.classList.add("diseñoNumero")
    return lista
}

carrito.addEventListener("click", function(){
    body.style.overflow = "hidden"
    contenedorCompra.classList.remove('none')
    contenedorCompra.classList.add('contenedorCompra')
    informacionCompra.classList.add('informacionCompra')
    mostrarElemtrosLista()
})

function mostrarElemtrosLista() {
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i = 0; i < lista.length; i++){
        productosCompra.innerHTML += `<div><div class="img"><button onclick=eliminar(${i}) class="botonTrash"><img src="/img/trash.png"></button><p>${lista[i].nombre}</p></div><p> $${lista[i].precio}</p></div>`
        valortotal += parseInt(lista[i].precio)
    }
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`
}

function eliminar(indice){
    let van = true
    let i = 0
    while (van == true) {
        if (productos[i]._nombre == lista[indice].nombre) {
            productos[i]._existencia += 1
            lista.splice(indice, 1)
            van = false
        }
        i += 1
    }
    guardarAlmacenamientoLocal("productos", productos)

    numero.innerHTML = lista.length
    if (lista.length == 0){
        numero.classList.remove("diseñoNumero")
    }
    visualizarProductos()
    mostrarElemtrosLista()
}

x.addEventListener("click", function(){
    body.style.overflow = "auto"
    contenedorCompra.classList.add('none')
    contenedorCompra.classList.remove('contenedorCompra')
    informacionCompra.classList.remove('informacionCompra')
})