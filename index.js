let titulo = document.querySelector("h1").innerText  = "PRODUCTOS";

const cards = [`<div></div>`];

function createCards(){ 
    for (let i = 1; i <= 6; i++){
        const card = `<div class="col-lg-4 col-md-6 mb-4"> 
                        <div class="card">
                            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Producto">
                            <div class="card-body">
                                <h5 class="card-title">PRODUCTO ${i}</h5>
                                <p class="card-text">$Producto excelente</p>
                                <a href="./producto/producto.html" class="btn btn-dark">Ver Más</a>
                            </div>
                        </div> 
                    </div>`;
    cards.push(card);
    };
};

createCards();
document.querySelector("section").innerHTML = cards.join().replaceAll(",", "");

