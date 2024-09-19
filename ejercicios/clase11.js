
class Budin{
    constructor(ingredientes, mezcla, coccion){
        this.ingredientes = ingredientes;
        this.mezcla = mezcla;
        this.coccion = coccion;
    }
}

let tipoBudin = prompt("¿De que tipo de budín te gustaría informarte: NARANJA o MANZANA?")

if (tipoBudin === "NARANJA"){
    
    const naranja = new Budin("Azucar, leche, manteca, huevos", "5 minutos", "40 minutos");

    let metodosBudin = prompt("¿Que quiere saber: INGREDIENTES, MEZCLA o COCCION?")
        if (metodosBudin === "INGREDIENTES"){
            alert(`Los ingredientes son ${naranja.ingredientes}`)
        }
        else if(metodosBudin === "MEZCLA"){
            alert(`La mezcla es de ${naranja.mezcla}`)
        }
        else if(metodosBudin === "COCCION"){
            alert(`La coccion es de ${naranja.coccion}`)
        } else{
            alert("Esa caracteristica no existe o es incorrecta")
        };

} else if (tipoBudin === "MANZANA"){

    const manzana = new Budin("Manzana, manteca, azucar, aceite", "7 minutos", "35 minutos")

    let metodosBudin = prompt("¿Que quiere saber: INGREDIENTES, MEZCLA o COCCION?")
        if (metodosBudin === "INGREDIENTES"){
            alert(`Los ingredientes son ${manzana.ingredientes}`)
        }
        else if(metodosBudin === "MEZCLA"){
            alert(`La mezcla es de ${manzana.mezcla}`)
        }
        else if(metodosBudin === "COCCION"){
            alert(`La coccion es de ${manzana.coccion}`)
        } else{
            alert("Esa caracteristica no existe o es incorrecta")
        };

} else {
    alert("La opcion que ha ingresado es incorrecta o no existe!")
}