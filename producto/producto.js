let tituloProducto = document.querySelector("h5");
let textoProducto = document.querySelector("span");
let textoPrecio = document.querySelector("p");
let textoImagen = document.querySelector("img")
let textoStock = document.querySelector("")

class Producto {
    constructor(imagen, titulo, detalle, stock, precio){
        this.imagen = imagen;
        this.titulo = titulo;
        this.detalle = detalle;
        this.stock = stock;
        this.precio = precio;
    };
};

const martillo = new Producto("asd.img", "Martillo", "Muy buen producto para madera", 35, "$1500");

tituloProducto.innerHTML = `${martillo.titulo}`;
textoProducto.innerHTML = `${martillo.detalle}`;
textoPrecio.innerHTML = `${martillo.precio}`;
textoImagen.innerHTML = `${martillo.imagen}`;
textoStock.innerHTML = `${martillo.stock}`;