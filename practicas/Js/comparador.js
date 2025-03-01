function agregarTarea() {
    let tarea = document.getElementById("taskInput").value.trim();

    if (tarea === "") {
        document.getElementById("mensaje").innerText = "Por favor, escribe una tarea válida.";
        return;
    }

    
    let lista = document.getElementById("taskList");
    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `${tarea} <button onclick="eliminarTarea(this)">Eliminar</button>`;

    
    lista.appendChild(nuevaTarea);

    // Limpiar el input
    document.getElementById("taskInput").value = "";

    // Mostrar mensaje de éxito
    document.getElementById("mensaje").innerText = "Tarea añadida correctamente.";
}

function eliminarTarea(boton) {
    let tarea = boton.parentElement;
    tarea.remove();

    // Mostrar mensaje de eliminación
    document.getElementById("mensaje").innerText = "Tarea eliminada correctamente.";
}
function regresar1() {
    let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

    if (ventanaPrincipal) {
        window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
    }
    
    window.close(); // Cerrar la pestaña actual
}