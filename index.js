// Asignando el texto "PRODUCTOS al primer h1 del body"
let titulo = document.querySelector("h1");
titulo.innerText = "PRODUCTOS";

// Creando array para las cartas
const cards = []

// Bucle para generar las cards 
for (let i = 1; i <= 6; i++) {
    const card = 
        <div class="col-lg-4 col-md-6 mb-4"> 
            <div class="card">
                <img src="" class="card-img-top" alt="Producto">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-succes">Ver más</a>
                </div>
            </div>
        </div>
    ;
    // Metiendo las cards en el array 
    cardsArray.push(card);
}
