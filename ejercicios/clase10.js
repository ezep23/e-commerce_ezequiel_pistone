// Determinar en que estación del año estás
function cualEstacion(){
    const dia = Number(prompt("¿Cual es el número del día de hoy?"));
    const mes = Number(prompt("¿Cual es el número de este mes?"));

    switch(mes){
        case 1:
            return alert('Estas en Verano');
        case 2:
            return alert('Estas en Verano');
        case 3:
            if (diaEstacion() === "Menor"){
                return alert('Estás en Verano');
            } else{
                return alert('Estás en Otoño');
            }
        case 4:
            return alert('Estas en Otoño');
        case 5:
            return alert('Estas en Otoño');
        case 6:
            if (diaEstacion() === "Menor"){
                return alert('Estás en Otoño');
            } else{
                return alert('Estás en Invierno');
            }
        case 7:
            return alert('Estas en Invierno');
        case 8:
            return alert('Estas en Invierno');
        case 9:
            if (diaEstacion() === "Menor"){
                return alert('Estás en Invierno');
            } else{
                return alert('Estás en Primavera');
            }
        case 10:
            return alert('Estas en Primavera');
        case 11:
            return alert('Estas en Primavera');  
        case 12:
            if (diaEstacion() === "Menor"){
                return alert('Estás en Primavera');
            } else{
                return alert('Estás en Verano');
            }
    };

    function diaEstacion(){
        if(dia < 21){
        return "Menor";
        } else if(dia >= 21){
        return "Mayor";
        }
        else if(dia > 31){
        return alert("Es imposible");
        } else {
        return alert("Ingrese un número posible");
        }
    };

};

cualEstacion();

