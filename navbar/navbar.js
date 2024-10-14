let enlaces = [
    {nombre:"Construccion", link:".", categoria:"construccion"},
    {nombre:"Carpinteria", link:".", categoria:"carpinteria"},
    {nombre:"Plomeria", link:".", categoria:"plomeria"}
];

const menu = [];

for (let enlace of enlaces){
    menu.push(`<a class="nav-link" onclick=filtrarCategoria(${enlace.categoria}) href="./${enlace.link}">${enlace.nombre}</a>`)
}

// esto no funciona por que no hay categorias, acordate de agregar a los objetos y después filtrar

document.getElementById("nav-item").innerHTML = menu.join().replaceAll(",","")
