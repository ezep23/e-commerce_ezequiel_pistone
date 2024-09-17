// Asignando el texto "PRODUCTOS al primer h1 del body"
let titulo = document.querySelector("h1").innerText  = "PRODUCTOS";

// Creando array para las cartas
const cards = [`<div></div>`];

//función para crear un bucle que genera cards
function createCards(){ 
    for (let i = 1; i <= 6; i++){
        const card = `<div class="col-lg-4 col-md-6 mb-4"> 
                        <div class="card">
                            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Producto">
                            <div class="card-body">
                                <h5 class="card-title">Card title ${i}</h5>
                                <p class="card-text"></p>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-dark">Ver más</a>
                            </div>
                        </div> 
                    </div>`;
    // Metiendo las cards en el array 
    cards.push(card);
    };
};

createCards();
document.querySelector("section").innerHTML = cards.join().replaceAll(",", "");

