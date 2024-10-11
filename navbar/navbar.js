let enlaces = [
    {nombre:"Construccion", link:"./construccion"},
    {nombre:"Carpinteria", link:"./Carpinteria"},
    {nombre:"Plomeria", link:"./Plomeria"}
];

const menu = [];

for (let enlace of enlaces){
    menu.push(`<a class="nav-link" href="./${enlace.link}">${enlace.nombre}</a>`)
}

// esto no funciona por que no hay categorias, acordate de agregar a los objetos y después filtrar

document.getElementById("nav-item").innerHTML = menu.join().replaceAll(",","")
