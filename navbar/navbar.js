
const login = document.querySelector("#dinamic-navbar")
const name = localStorage.getItem("email").split("@")[0]
login.innerHTML = `<ul class="navbar-nav session">${ 
    localStorage.getItem("email") 
        ? `<li> ¡Hola, ${name}!</li><span> | </span><li><img height="25" src="../img/cart.png" alt="Comprar"><b id="quantity">${localStorage.getItem("quantity")} </b></li><span> | </span><li onclick="logout()">Cerrar sesión</li>`   
        : `<li href="./auth/login.html">Iniciar sesión</li>`
} </ul>`

function logout() {
    localStorage.clear()
    location.href = "../index.html"
}