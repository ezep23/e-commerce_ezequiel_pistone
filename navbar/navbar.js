
const login = document.querySelector("#dinamic-navbar")
login.innerHTML = `<ul class="navbar-nav">${ 
    localStorage.getItem("email") 
        ? `<li> ¡Hola, ${localStorage.getItem("email").split("@")[0]}!</li><span> | </span><li><a class="link text-dark" href="../cart/cart.html"><img height="25" src="../img/cart.png"><b id="quantity">${localStorage.getItem("quantity")}</b></a></li><span> | </span><li onclick="logout()">Cerrar sesión</li>`   
        : `<li> <a class="nav-link text-dark" href='../auth/login.html'>Iniciar sesión</a> </li>`
}</ul>` 

function logout() {
    localStorage.clear()
    location.href = "../index.html"
}