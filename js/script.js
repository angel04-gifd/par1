function mostrarSeccion(id) {
    let secciones = document.querySelectorAll('.content');
    secciones.forEach(seccion => seccion.classList.remove('active'));
    
    let seccionActiva = document.getElementById(id);
    if (seccionActiva) {
        seccionActiva.classList.add('active');
    }
}


function abrirModulo1() {
    let nuevaPestana = window.open('practicas/comparador.html', '_blank');
    sessionStorage.setItem('pestanaAbierta', nuevaPestana);
}
function abrirModulo2() {
    let nuevaPestana = window.open('practicas/tareas.html', '_blank');
    sessionStorage.setItem('pestanaAbierta', nuevaPestana);
}
function abrirModulo3() {
    let nuevaPestana = window.open('practicas/calculadora.html', '_blank');
    sessionStorage.setItem('pestanaAbierta', nuevaPestana);
}
function abrirModulo4() {
    let nuevaPestana = window.open('practicas/Tienda.html', '_blank');
    sessionStorage.setItem('pestanaAbierta', nuevaPestana);
}
function abrirModulo5() {
    let nuevaPestana = window.open('practicas/login.html', '_blank');
    sessionStorage.setItem('pestanaAbierta', nuevaPestana);
}
function abrirModulo6() {
    let nuevaPestana = window.open('practicas/notas.html', '_blank');
    sessionStorage.setItem('pestanaAbierta', nuevaPestana);
}
function abrirModulo7() {
    let nuevaPestana = window.open('practicas/adivina.html', '_blank');
    sessionStorage.setItem('pestanaAbierta', nuevaPestana);
}
