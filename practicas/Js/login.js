function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + username + "!");
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}
function regresar1() {
    let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

    if (ventanaPrincipal) {
        window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
    }
    
    window.close(); // Cerrar la pestaña actual
}