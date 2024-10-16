let enlaces = [
    {nombre:"Construccion", link:"#"},
    {nombre:"Carpinteria", link:"#"},
    {nombre:"Plomeria", link:"#"}
];

const menu = [];

for (let enlace of enlaces){
    menu.push(`<a class="nav-link" href="./${enlace.link}">${enlace.nombre}</a>`)
}

document.getElementById("#nav-item").innerHTML = menu.join().replaceAll(",","")

