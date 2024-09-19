let tipoBudin = prompt("¿De que tipo de budín te gustaría informarte: NARANJA o MANZANA?")

if (tipoBudin === "NARANJA"){
    
    const naranja = {
        ingredientes: "naranja, huevo, manteca, azucar, aceite",
        mezcla: "5 minutos",
        coccion: "40 minutos"
    }

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

    const manzana = {
        ingredientes: "Manzana, manteca, azucar, aceite",
        mezcla: "7 minutos",
        coccion: "35 minutos"
    }

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
