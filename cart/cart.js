
function autenticado(){
    if (localStorage.getItem("email") == null){
        location.href = "../index.html" 
    } 
} autenticado();

const cardsSection = document.querySelector("#cart #cards");
const btnClearCart = document.querySelector("#btn-clear-cart");

function getCart(cards) {
    const list = cards.map(
        card => `
            <div class="card border shadow-none">
                <div class="card-body">
                    <div class="d-flex align-items-start border-bottom pb-3">
                        <div class="me-4">
                            <img src="${card.product.imagen}" alt="${card.product.titulo}"
                                class="avatar-lg rounded" />
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-18">${card.product.titulo}</h5>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Precio</p>
                                        <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Cantidad</p>
                                        <h5 class="mb-0 mt-2">${card.quantity}</h5>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Total</p>
                                        <h5>${card.product.precio * card.quantity}</h5>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    ).join("");
    cardsSection.innerHTML = list;
    btnClearCart.style.display = cards.length > 0 ? "block" : "none";
}

function total(cards) {
    let cartTotal = document.querySelector("#card-total");
    let total = cards.length > 0
        ? cards.reduce((acumulado, actual) => acumulado + actual.product.precio * actual.stock, 0)
        : 0;

    cartTotal.innerText = "$" + Number(total);
}

function removeItem(id) {
    let cards = JSON.parse(localStorage.getItem("cart")) || [];
    let newCards = cards.filter(card => card.product.id !== id); 
    localStorage.setItem("cart", JSON.stringify(newCards));
    getCart(newCards);
    total(newCards);

    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", quantity);

    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = quantity;
}

function finishOrder(){
    Swal.fire({
        text: "¿Estás seguro/a de querer añadir esto al carrito?",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "red"
      }).then(result => {
        if (result.isConfirmed) {
          cleanCart()
          location.href = "../index.html"
        }
      })
}

function cleanCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0");

    getCart([]);
    total([]);
    
    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = "0";
}

getCart(JSON.parse(localStorage.getItem("cart")) || []);
total(JSON.parse(localStorage.getItem("cart")) || []);