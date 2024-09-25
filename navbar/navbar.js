let enlaces = [
    {nombre:"Construccion", link:"./construccion"},
    {nombre:"Carpinteria", link:"./Carpinteria"},
    {nombre:"Plomeria", link:"./Plomeria"}
];

const menu = [];

for (let enlace of enlaces){
    menu.push(`<a class="nav-item" href="${enlace.link}">${enlace.nombre}</a>`)
}

document.querySelector("header").innerHTML = menu.join().replaceAll(",","")