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

const login = `<ul> 
    ${localStorage.getItem("email") 
        ? `<li> ${localStorage.getItem("email")}</li><span> </span><li>Cerrar | sesión</li>`   
        : `<li><a class="nav-link" href="./login.html">Iniciar sesión</a></li>`
    } </ul>`

document.querySelector("#login").innerHTML = login.join()