// CALCULADORA EN PROMPT

const operacion = prompt("Ingrese su operacion: (SUMAR, RESTAR, MULTIPLICAR, DIVIDIR");

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));

if (operacion == "SUMAR"){
    resultado = num1 + num2
    console.log(`El resultado de ${operacion} es: ${resultado}`)
} else if (operacion == "RESTAR"){
    resultado = num1 - num2
    console.log(`El resultado de ${operacion} es: ${resultado}`)
} else if (operacion == "MULTIPLICAR"){
    resultado = num1 * num2
    console.log(`El resultado de ${operacion} es: ${resultado}`)
} else if (operacion == "DIVIDIR"){
    resultado = num1 / num2
    console.log(`El resultado de ${operacion} es: ${resultado}`)
} else {
    console.log("La operacion que ha ingresado es incorrecta o no existe")
}

// RANDOM

const random = Math.floor(Math.random() *3)

const num = Number(Prompt("Ingrese un numero entre 1 y 3: "))

if (num === 1 || num === 2 || num == 3){
    if(num === random){
        alert("Felicidades, has acertado.")
    } else(
        alert("Lo siento, has perdido.")
    )
} else{
    alert("Ha ingresado un númemero incorrecto")
}