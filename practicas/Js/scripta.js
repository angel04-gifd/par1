const numeroSecreto = Math.floor(Math.random() * 10) + 1;

document.getElementById("inputNumero").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const inputNumero = parseInt(event.target.value);
    const resultado = document.getElementById("resultado");

    if (isNaN(inputNumero) || inputNumero < 1 || inputNumero > 10) {
      resultado.textContent = "Por favor, introduce un número válido (entre 1 y 10).";
      resultado.style.color = "red";
      return;
    }

    if (inputNumero === numeroSecreto) {
      resultado.textContent = "¡Felicidades! Adivinaste el número 🎉";
      resultado.style.color = "green";
    } else if (inputNumero > numeroSecreto) {
      resultado.textContent = `El número es menor que ${inputNumero}, intenta de nuevo.`;
      resultado.style.color = "orange";
    } else {
      resultado.textContent = `El número es mayor que ${inputNumero}, intenta de nuevo.`;
      resultado.style.color = "orange";
    }

    event.target.value = ""; 
  }
});
function regresar1() {
  let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

  if (ventanaPrincipal) {
      window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
  }
  
  window.close(); // Cerrar la pestaña actual
}