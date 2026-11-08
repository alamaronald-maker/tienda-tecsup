
// Productos disponibles en Tienda TECSUP
const productos = [
    {
        nombre: "Polo TECSUP",
        precio: 25.00,
        cantidad: 2
    },
    {
        nombre: "Taza TECSUP",
        precio: 18.00,
        cantidad: 1
    }
];

// Función para calcular el importe total
function calcularTotal(lista) {
    let total = 0;

    for (const producto of lista) {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
    }

    return total;
}

// Mostrar el resultado en la página
const elementoTotal = document.getElementById("total");

if (elementoTotal) {
    elementoTotal.textContent =
        "Total: S/ " + calcularTotal(productos).toFixed(2);
}
