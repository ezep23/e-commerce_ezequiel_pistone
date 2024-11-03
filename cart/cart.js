
function autenticado(){
    if (localStorage.getItem("email") == null){
        location.href = "../index.html" 
    } 
} autenticado();
