
let array = [1,2,3]

const respuesta = prompt("Elija una opción: VER, AGREGAR, INVERTIR")

for (let i = 0; array.length < i;){
    if(respuesta === "VER"){
        console.log(array)
    } else if (respuesta === "AGREGAR"){
        if(array.indexOf(respuesta) in respuesta){
            alert("Eso no se puede loco")
        } else{
            const opcion = prompt("¿Que vas a agregar: ?")
            array.push(opcion);
            console.log(array);
        }
    } else if (respuesta === "INVERTIR"){
        array.reverse();
        console.log(array);
    } else{
        alert("Esa opción no es valida!")
    }   
}
