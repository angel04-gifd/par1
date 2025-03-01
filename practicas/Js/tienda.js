// Seleccionar todos los productos
const products = document.querySelectorAll('.product');

// Agregar eventos a cada producto
products.forEach(product => {
    // Mostrar alerta al hacer clic en un producto
    product.addEventListener('click', () => {
        const productName = product.querySelector('p').innerText; // Obtener el nombre del producto
        alert(`¡Has seleccionado: ${productName}!`);
    });

    // Mostrar mensaje en consola al pasar el mouse por encima
    product.addEventListener('mouseover', () => {
        const productName = product.querySelector('p').innerText;
        console.log(`Estás viendo: ${productName}`);
    });
});
function regresar1() {
    let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

    if (ventanaPrincipal) {
        window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
    }
    
    window.close(); // Cerrar la pestaña actual
}