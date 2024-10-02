let tituloProducto = document.querySelector("h4");
let textoProducto = document.querySelector("span");
let textoPrecio = document.querySelector("p");
let textoImagen = document.querySelector("img")
let textoStock = document.querySelector("h5")
let id = window.location.search.split("=").at(-1);


const data = [
    {
      id: 1,
      titulo: "Nut - Cashews, Whole, Raw",
      detalle: "brand proactive niches",
      imagen: "http://dummyimage.com/193x100.png/dddddd/000000",
      stock: 81,
      precio: 708214,
    },
    {
      id: 2,
      titulo: "Pork - Side Ribs",
      detalle: "target end-to-end experiences",
      imagen: "http://dummyimage.com/104x100.png/ff4444/ffffff",
      stock: 166,
      precio: 672452,
    },
    {
      id: 3,
      titulo: "Broom - Push",
      detalle: "facilitate interactive functionalities",
      imagen: "http://dummyimage.com/168x100.png/cc0000/ffffff",
      stock: 970,
      precio: 903934,
    },
    {
      id: 4,
      titulo: "Cheese - St. Andre",
      detalle: "whiteboard frictionless supply-chains",
      imagen: "http://dummyimage.com/171x100.png/dddddd/000000",
      stock: 875,
      precio: 909209,
    },
    {
      id: 5,
      titulo: "Sloe Gin - Mcguinness",
      detalle: "architect 24/7 e-markets",
      imagen: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
      stock: 743,
      precio: 833158,
    },
    {
      id: 6,
      titulo: "Jerusalem Artichoke",
      detalle: "reinvent viral partnerships",
      imagen: "http://dummyimage.com/247x100.png/cc0000/ffffff",
      stock: 55,
      precio: 837655,
    },
    {
      id: 7,
      titulo: "Nut - Chestnuts, Whole",
      detalle: "engage synergistic convergence",
      imagen: "http://dummyimage.com/137x100.png/dddddd/000000",
      stock: 645,
      precio: 416722,
    },
    {
      id: 8,
      titulo: "V8 Splash Strawberry Kiwi",
      detalle: "whiteboard B2C methodologies",
      imagen: "http://dummyimage.com/210x100.png/dddddd/000000",
      stock: 165,
      precio: 550520,
    },
    {
      id: 9,
      titulo: "Chicken Giblets",
      detalle: "envisioneer turn-key networks",
      imagen: "http://dummyimage.com/229x100.png/dddddd/000000",
      stock: 351,
      precio: 935706,
    },
];


class Producto {
    constructor(imagen, titulo, detalle, stock, precio, id){
        this.imagen = imagen;
        this.titulo = titulo;
        this.detalle = detalle;
        this.stock = stock;
        this.precio = precio;
        this.id = id;
    };
};


const filtrado = data.filter(id === id);

const randomProduct = new Producto(`asd.jpg`, "Martillo", "Muy buen producto para madera", 35, "$1500", );

tituloProducto.innerHTML = produc.titulo;
textoProducto.innerHTML = randomProduct.detalle;
textoPrecio.innerHTML = randomProduct.precio;
textoImagen.innerHTML = randomProduct.imagen;
textoStock.innerHTML = randomProduct.stock;