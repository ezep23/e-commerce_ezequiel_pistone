// CLASE PJ PRINCIPAL
class Personaje {
    constructor(nombre, edad, altura, peso, nacionalidad, rol, daño = 25, vida = 100){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.nacionalidad = nacionalidad;
        this.rol = rol;
        this.vida = vida;
        this.daño = daño;
    }

    curarse(){
        return this.vida + 25;
    }

    atacar(){
        return this.daño + 5;
    }
};

// PERSONAJE EN HISTORIA
function crearPersonaje(){
    // NOMBRE
    const nombre = prompt("¡Bienvenido!, para comenzar ingrese su nombre");
    alert(`¡Hola ${nombre}, comencemos a crear tu personaje!`);
    // EDAD
    const edad = Number(prompt(`${nombre}, ¿Que edad tendrá tu personaje: ?`));
    
    // VERIFICACIONES
    if (edad <= 100 || edad >= 0 ){
        //ALTURA
        const altura = Number(prompt("¡Excelente, sigamos con tu altura (CENTIMETROS): "));
        if (altura => 60 || altura <= 230 ){
            // PESO
            const peso = Number(prompt("Perfecto, ahora ingrese su peso en kilos: "));
            if (peso >= 30 || peso <= 150){
                //NACIONALIDAD
                const nacionalidad = String(prompt(`${nombre}, ¿Que nacionalidad tendrá tu personaje: ?`));
                // ROL
                const rol = String(prompt("Excelente, por último que rol tendrá: (Mago, Luchador, Tanque) "));
                
                // INSTANCIANDO CLASE
                const usuario = new Personaje(nombre, edad, altura, peso, nacionalidad, rol);
                console.table(usuario);

            }else {
                error();
            }
        } else{
            error();
        }
    } else{
        error();
    }
}

// COMBATES PARA HISTORIA
function combates(usuario){
    alert("¡CUIDADO, TE ACABA DE ATACAR UN PERRO!");
    alert(`TU VIDA ACTUAL ES DE: ${usuario.vida - 50}`);
    
    const primerCombate = prompt("¿Que deseas hacer primero: CURAR / ATACAR ?");

    if (primerCombate === "CURAR"){
        alert(`Te has curado con un poción magica, vida actual: ${usuario.curarse()}`);
    } else if (primerCombate === "ATACAR"){
        alert(`El perro ha muerto, has mejorado tu daño, daño actual: ${usuario.atacar()}`);
        alert("¡Sigamos explorando el mundo salvaje!")
    }else{
        alert("Uhm, parecido que has huido?");
    };
};

// ERROR POR LAS DUDAS
function error(){
    alert("¡Ese valor es imposible!, ingrese un valor lógico.")
};

// HISTORIA
function historia(){
    crearPersonaje();
    combates(usuario);
}

historia();