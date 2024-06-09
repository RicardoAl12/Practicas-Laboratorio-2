

const productos = [
    { nombre: "Suavizante de manos", precio: 10 },
    { nombre: "Suavizante ", precio: 20 },
    { nombre: "Limpiadores de manos", precio: 15 }
];


function mostrarProductos() {
    const productList = document.getElementById('product-list');
    
    productList.innerHTML = '';

    productos.forEach(producto => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
        `;
        productList.appendChild(productElement);
    });
}


document.addEventListener('DOMContentLoaded', mostrarProductos);