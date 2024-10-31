/* Productos */
const data = [
  {
    id: 1,
    titulo: "Martillo",
    detalle: "Excelente herramienta para martillar",
    imagen: "https://media.istockphoto.com/id/160057330/es/foto/martillo.jpg?s=1024x1024&w=is&k=20&c=lwmq9Ib-TtnQMOmOL30NVhQ6hKh-KIb8T5-jv7PPBLg=",
    stock: 11,
    precio: 2000,
  },
  {
    id: 2,
    titulo: "Clavos",
    detalle: "Excelente para ser clavados",
    imagen: "https://media.istockphoto.com/id/1205558213/es/foto/clavo-de-metal-de-cerca-aislado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=ydSWO9ey6ClkWluueMEooIQIWL8njlLA5jlQyaTsxZU=",
    stock: 3000,
    precio: 8,
  },
  {
    id: 3,
    titulo: "Pala",
    detalle: "Pa palear",
    imagen: "https://media.istockphoto.com/id/174928895/es/foto/old-metal-oxidado-madera-suciedad-y-pala.jpg?s=1024x1024&w=is&k=20&c=z1O8i6R_1RTm0gtCEGRWgcq3Kt_m_zjd_sE10CcE3zg=",
    stock: 30,
    precio: 1500,
  },
  {
    id: 4,
    titulo: "Pico",
    detalle: "Pa picar",
    imagen: "https://media.istockphoto.com/id/497543619/es/foto/zapapico-%C3%A9l-utiliz%C3%B3-alicates-de-corte-con-adze-hoja.jpg?s=1024x1024&w=is&k=20&c=K-lF0lhdXKHXwnIlsLHG2POqInxwyO6ryoMhoZjuXpQ=",
    stock: 16,
    precio: 4000,
  },
  {
    id: 5,
    titulo: "Carretilla",
    detalle: "Pa levantar",
    imagen: "https://media.istockphoto.com/id/181868600/es/foto/carretilla-verde-vac%C3%ADo.jpg?s=1024x1024&w=is&k=20&c=NEVrFcW0wiT9noFGz2LkGbz4Sxm6M3l6NRKaqns7z_g=",
    stock: 5,
    precio: 20000,
  },
  {
    id: 6,
    titulo: "Moladora",
    detalle: "Pa cortar",
    imagen: "https://media.istockphoto.com/id/926664936/es/foto/amoladora-angular-aislada-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=bzCJx1wwz8YBjCz9himea4CQwUKyVE8RkhTw6Ntdvpo=",
    stock: 32,
    precio: 50000,
  },
  {
    id: 7,
    titulo: "Taladro",
    detalle: "Pa taladrar",
    imagen: "https://media.istockphoto.com/id/1300993562/es/foto/destornillador-sobre-fondo-blanco-aislado.jpg?s=1024x1024&w=is&k=20&c=CWRbnHHWzpO2Osw2hM0dpvhdq_m0IFG3DPV90dYdu_8=",
    stock: 645,
    precio: 48000,
  },
  {
    id: 8,
    titulo: "Montacargas",
    detalle: "Pa levantar más pesado",
    imagen: "https://media.istockphoto.com/id/517818547/es/foto/carretilla-elevadora-aislado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=HyXCfnieks1b3_rtz_AOj6oTUBgnCdSoHjUAJ2WltY4=",
    stock: 2,
    precio: 3000000,
  },
  {
    id: 9,
    titulo: "Tambor",
    detalle: "Pa tamborear",
    imagen: "https://media.istockphoto.com/id/1331334163/es/foto/vieja-hormigonera-el%C3%A9ctrica-sucia.jpg?s=1024x1024&w=is&k=20&c=6AC-j-grI5Sir8NyVoe5aF71IbNkH9dABACtAur0Zas=",
    stock: 4,
    precio: 80000,
  },
];

function mapearProducto(){
  
  const id = window.location.search.split("=").at(-1);
  const randomProduct = data.filter((producto) => producto.id == id);

  const seccionProductos = document.querySelector("section")
  const producto = randomProduct.map((producto) => `<div class="container pt-4 col-lg-4 col-md-6 mb-4"> 
                                        <div class="card">
                                            <img src="${producto.imagen}" style=" height: 300px;" class="card-img-top" alt="Producto">
                                            <div class="card-body">
                                                <h5 class="card-title">${producto.titulo}</h5>
                                                <span class="card-text">${producto.detalle}</span>
                                                <p class="card-text">Disponibles: ${producto.stock}</p>
                                                <a href="./producto/producto.html?=${producto.id}" class="btn btn-dark">$${producto.precio}</a>
                                            </div>
                                        </div> 
                                    </div>`
    )
    return seccionProductos.innerHTML = producto.join().replaceAll(",", "");
}
mapearProducto();





