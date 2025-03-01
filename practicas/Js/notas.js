// Función para mostrar alertas
function mostrarAlerta(mensaje) {
    alert("Acción realizada: " + mensaje);
}
function regresar1() {
    let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

    if (ventanaPrincipal) {
        window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
    }
    
    window.close(); // Cerrar la pestaña actual
}