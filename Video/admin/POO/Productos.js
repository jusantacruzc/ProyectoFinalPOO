class ProductoObject {
    constructor(nombre, valor, existencia, urlImagen) {
        this.valor = valor;
        this.existencia = existencia;
        this.nombre = nombre;
        this.urlImagen = urlImagen;
    }
    // Getter para obtener el valor
    get valor() {
        return this._valor;
    }

    // Setter para establecer el valor
    set valor(nuevoValor) {
        this._valor = nuevoValor;
    }

    // Getter para obtener la existencia
    get existencia() {
        return this._existencia;
    }

    // Setter para establecer la existencia
    set existencia(nuevaExistencia) {
        this._existencia = nuevaExistencia;
    }

    // Getter para obtener el nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para establecer el nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Getter para obtener la URL de la imagen
    get urlImagen() {
        return this._urlImagen;
    }

    // Setter para establecer la URL de la imagen
    set urlImagen(nuevaUrlImagen) {
        this._urlImagen = nuevaUrlImagen;
    }
}

export default ProductoObject;