const credentials = {
    email: "Usuario@gmail.com",
    password: "1234" 
}

const autenticado = () => {
    if (localStorage.getItem("email")){
        location.href = "../index.html"
    } 
} 
autenticado();

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (credentials.email === form.elements.email.value && credentials.password === form.elements.contraseña.value){
        localStorage.setItem("email", form.elements.email.value);
        localStorage.setItem("cart", JSON.stringify([]))
        location.href = "../index.html"
    } else {
        alert("Error maquina!")
    }
})

