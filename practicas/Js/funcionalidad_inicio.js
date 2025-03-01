function compararNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("res").innerText = "Favor de ingresar un número válido";
        return;
    }

    if (num1 > num2) {
        document.getElementById("res").innerText = `${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
        document.getElementById("res").innerText = `${num2} es mayor que ${num1}`;
    } else {
        document.getElementById("res").innerText = "Ambos números son iguales";
    }
}
function regresar1() {
    let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

    if (ventanaPrincipal) {
        window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
    }
    
    window.close(); // Cerrar la pestaña actual
}