function addTask() {
    const taskInput = document.getElementById('t1');
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById('t2');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Eliminar";
    removeButton.classList.add('remove');
    removeButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}
function regresar1() {
    let ventanaPrincipal = sessionStorage.getItem('pestanaAbierta');

    if (ventanaPrincipal) {
        window.opener.focus();  // Enfocar la ventana que abrió esta pestaña
    }
    
    window.close(); // Cerrar la pestaña actual
}