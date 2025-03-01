
document.getElementById("sumar").onclick = function () {
    calcular("sumar");
  };
  document.getElementById("restar").onclick = function () {
    calcular("restar");
  };
  document.getElementById("multiplicar").onclick = function () {
    calcular("multiplicar");
  };
  document.getElementById("dividir").onclick = function () {
    calcular("dividir");
  };
  

  function calcular(operacion) {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultado");
  

    if (isNaN(numero1) || isNaN(numero2)) {
      resultado.textContent = "Por favor, ingresa números válidos.";
      return;
    }

    let calculo = 0;
  

    if (operacion === "sumar") {
      calculo = numero1 + numero2;
    } else if (operacion === "restar") {
      calculo = numero1 - numero2;
    } else if (operacion === "multiplicar") {
      calculo = numero1 * numero2;
    } else if (operacion === "dividir") {
      if (numero2 === 0) {
        resultado.textContent = "No se puede dividir entre 0.";
        return;
      }
      calculo = numero1 / numero2;
    }
  
    resultado.textContent = `El resultado es: ${calculo}`;
  }
  function regresar1() {
    let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

    if (ventanaPrincipal) {
        window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
    }
    
    window.close(); // Cerrar la pestaña actual
}