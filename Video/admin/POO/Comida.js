import ProductoObject from './Productos.js';

class Comida extends ProductoObject {
    constructor(nombre, valor, existencia, urlImagen, caducidad) {
        super(nombre, valor, existencia, urlImagen);
        this.caducidad = caducidad;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get valor() {
        return this._valor;
    }

    set valor(nuevoValor) {
        this._valor = nuevoValor;
    }

    get existencia() {
        return this._existencia;
    }

    set existencia(nuevaExistencia) {
        this._existencia = nuevaExistencia;
    }

    get urlImagen() {
        return this._urlImagen;
    }

    set urlImagen(nuevaUrlImagen) {
        this._urlImagen = nuevaUrlImagen;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(nuevaDescripcion) {
        this._descripcion = nuevaDescripcion;
    }

    get caducidad() {
        return this._caducidad;
    }

    set caducidad(nuevaCaducidad) {
        this._caducidad = nuevaCaducidad;
    }
}

export default Comida;