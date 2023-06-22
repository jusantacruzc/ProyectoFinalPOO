import ProductoObject from './POO/Productos.js';
import Comida from './POO/Comida.js';
import Ropa from './POO/Ropa.js';

function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];
let mensaje = document.getElementById('mensaje')

//Añadir un producto

const añadirProducto = document.getElementById('productoAñadir')
const añadirValor = document.getElementById('valorAñadir')
const añadirExistencia = document.getElementById('existenciaAñadir')
const añadirImagen = document.getElementById('ImagenAñadir')
const ProductosObject = new ProductoObject();
const RopaObject = new Ropa();
const ComidaObject = new Comida();
const tipoProducto = document.getElementById('tipoProducto');
const caducidadAñadir = document.getElementById('caducidadAñadir');
const tallaAñadir = document.getElementById('tallaAñadir');
const caducidadAñadirLabel = document.getElementById('caducidadAñadirLabel');
const tallaAñadirLabel = document.getElementById('tallaAñadirLabel');



document.getElementById("botonAñadir").addEventListener("click", function (event) {
    event.preventDefault()

    let productoAñadir = añadirProducto.value
    let valorAñadir = añadirValor.value
    let existenciaAñadir = añadirExistencia.value
    let imagenAñadir = añadirImagen.value
    let caducidadAñadirValor = caducidadAñadir.value
    let tallaAñadirValor = tallaAñadir.value

    let van = true
    //Comida
    if (tipoProducto.value === "Comida") {

        if (productoAñadir == '' || valorAñadir == '' || existenciaAñadir == '' || imagenAñadir == '' || caducidadAñadirValor == '') {
            mensaje.classList.add('llenarCampos')
            setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
            van = false
        }
        else {
            for (let i = 0; i < productos.length; i++) {
                if (productos[i]._nombre == productoAñadir) {
                    mensaje.classList.add('repetidoError')
                    setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
                    van = false
                    caducidadAñadir.value = ""
                    tallaAñadir.value = ""
                }
            }
        }
        if (van == true) {
            ComidaObject.nombre = productoAñadir;
            ComidaObject.existencia = valorAñadir;
            ComidaObject.valor = existenciaAñadir;
            ComidaObject.urlImagen = imagenAñadir;
            ComidaObject.caducidad = caducidadAñadirValor;

            productos.push(ComidaObject)


            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('repetidoError')
                window.location.reload()
            }, 1500)
        }

    }
    //Ropa
    else if (tipoProducto.value === "Ropa") {

        if (productoAñadir == '' || valorAñadir == '' || existenciaAñadir == '' || imagenAñadir == '' || tallaAñadirValor == '') {
            mensaje.classList.add('llenarCampos')
            setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
            van = false
        }
        else {
            for (let i = 0; i < productos.length; i++) {
                if (productos[i]._nombre == productoAñadir) {
                    mensaje.classList.add('repetidoError')
                    setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
                    van = false
                    caducidadAñadir.value = ""
                    tallaAñadir.value = ""
                }
            }
        }
        if (van == true) {
            RopaObject.nombre = productoAñadir;
            RopaObject.existencia = valorAñadir;
            RopaObject.valor = existenciaAñadir;
            RopaObject.urlImagen = imagenAñadir;
            RopaObject.talla = tallaAñadirValor;

            productos.push(RopaObject)


            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('repetidoError')
                window.location.reload()
            }, 1500)
        }
    }
    else {
        if (productoAñadir == '' || valorAñadir == '' || existenciaAñadir == '' || imagenAñadir == '') {

            mensaje.classList.add('llenarCampos')
            setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
            van = false
        }
        else {
            for (let i = 0; i < productos.length; i++) {
                if (productos[i]._nombre == productoAñadir) {
                    mensaje.classList.add('repetidoError')
                    setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
                    van = false
                    caducidadAñadir.value = ""
                    tallaAñadir.value = ""
                }
            }
        }

        if (van == true) {
            ProductosObject.nombre = productoAñadir;
            ProductosObject.existencia = valorAñadir;
            ProductosObject.valor = existenciaAñadir;
            ProductosObject.urlImagen = imagenAñadir;

            productos.push(ProductosObject)


            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('repetidoError')
                window.location.reload()
            }, 1500)
        }
    }

    guardarAlmacenamientoLocal('productos', productos);
})

// Editar
const productoEd = document.getElementById('productoEditar')
const atributoEd = document.getElementById('atributoEditar')
const nuevoAtributoEd = document.getElementById('nuevoAtributo')
const valorProductoEditar = document.getElementById('valorProductoEditar');


productoEd.addEventListener("change", () => {
    atributoEd.innerHTML = ''
    for (let x = 0; x < productos.length; x++) {
        if (productos[x]._nombre == productoEd.value) {
            console.log(productos[x]._nombre);
            Object.keys(productos[x]).forEach(element => {
                atributoEd.innerHTML += `<option>${element}</option>`
            });
        }
    }




})

document.getElementById("botonEditar").addEventListener("click", function (event) {
    event.preventDefault()

    let productoEditar = productoEd.value
    let atributoEditar = atributoEd.value
    let nuevoAtributo = nuevoAtributoEd.value



    let van = false
    if (productoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
        mensaje.classList.add('llenarCampos')
        setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
    }
    else {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i]._nombre == productoEditar) {
                productos[i][atributoEditar] = nuevoAtributo
                van = true
            }
        }
        if (van == true) {
            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('realizado')
                window.location.reload()
            }, 1500);
        }
        else {
            mensaje.classList.add('noExisteError')
            setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
        }
        guardarAlmacenamientoLocal('productos', productos);
    }
})

// Eliminar
const productoE = document.getElementById('productoEliminar')

document.getElementById("botonEliminar").addEventListener("click", function (event) {
    event.preventDefault()
    let productoEliminar = productoE.value
    let van = false

    for (let i = 0; i < productos.length; i++) {
        if (productos[i]._nombre == productoEliminar) {
            productos.splice(i, 1)
            van = true
        }
    }

    if (van == false) {
        mensaje.classList.add('noExsiteError')
        setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
    }
    else {
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('realizado')
            window.location.reload()
        }, 1500);
    }
    guardarAlmacenamientoLocal('productos', productos);
})




// mostrar productos
window.addEventListener("load", () => {
    const productoEd = document.getElementById('productoEditar')
    const productoEl = document.getElementById('productoEliminar')
    for (let i = 0; i < productos.length; i++) {
        productoEd.innerHTML += `<option>${productos[i]._nombre}</option>`
        productoEl.innerHTML += `<option>${productos[i]._nombre}</option>`
    }

    let mostraProductos = document.getElementById('mostrarProductos')
    mostraProductos.innerHTML = ''
    let adicional = ``
    for (let i = 0; i < productos.length; i++) {

        if(productos[i]._talla != undefined){
            adicional = `<p>Talla: ${productos[i]._talla}</p>`
        } else if (productos[i]._caducidad != undefined){
            adicional = `<p>Caducidad: ${productos[i]._caducidad}</p>`
        }
        mostraProductos.innerHTML += `<div class="contenedorProductos"><img src="${productos[i]._urlImagen}"><div class="informacion"><p>${productos[i]._nombre}</p><p class="precio"><span>Precio: ${productos[i]._valor}$</span></p> <p>Existencia: ${productos[i]._existencia}</p>${adicional}</div></div>`
        
    }

})


//Establecer el tipo de producto para AÑADIR
tipoProducto.addEventListener("change", () => {
    if (tipoProducto.value == "Ropa") {
        tallaAñadir.disabled = false
        caducidadAñadir.disabled = true

        tallaAñadirLabel.classList.remove('disabled');
        tallaAñadirLabel.classList.add('active');
        caducidadAñadirLabel.classList.remove('active');
        caducidadAñadirLabel.classList.add('disabled');

    } else if (tipoProducto.value == "Comida") {
        tallaAñadir.disabled = true
        caducidadAñadir.disabled = false

        tallaAñadirLabel.classList.add('disabled');
        tallaAñadirLabel.classList.remove('active');
        caducidadAñadirLabel.classList.add('active');
        caducidadAñadirLabel.classList.remove('disabled');
    } else {
        tallaAñadir.disabled = true
        caducidadAñadir.disabled = true

        tallaAñadirLabel.classList.remove('active');
        tallaAñadirLabel.classList.add('disabled');
        caducidadAñadirLabel.classList.remove('active');
        caducidadAñadirLabel.classList.add('disabled');
    }
})



