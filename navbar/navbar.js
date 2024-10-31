
const login = document.querySelector("#dinamic-navbar")
login.innerHTML = `<ul class="navbar-nav session">${ 
    localStorage.getItem("email") 
        ? `<li> ${localStorage.getItem("email")}</li><span> | </span><li>Cerrar sesión</li>`   
        : `<li><a class="nav-link" href="./login.html">Iniciar sesión</a></li>`
} </ul>`

function logout() {
    localStorage.clear()
    location.href = "index.html"
}