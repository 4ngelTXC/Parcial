// ANGEL GUSTAVO PIMENTEL AMAYA U20240853
const titulo = document.getElementById("titulo");
const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const btnCambiarColor = document.getElementById("btnCambiarColor");
const btnCambiarAlineacion = document.getElementById("btnCambiarAlineacion");
const btnCrearTexto = document.getElementById("btnCrearTexto");
const btnBorrarTexto = document.getElementById("btnBorrarTexto");

function cambiarTexto() {
  titulo.textContent = "Hola Mundo con JavaScript";
}

function cambiarColor() {
  titulo.style.color = "red";
}

function cambiarAlineacion() {
  titulo.style.textAlign = "center";
}

function crearTexto() {
  if (!document.getElementById("nuevoTexto")) { 
    const nuevoTexto = document.createElement("p");
    nuevoTexto.id = "nuevoTexto";
    nuevoTexto.textContent = "JavaScript permite crear páginas dinámicas";
    document.body.appendChild(nuevoTexto);
  }
}

function borrarTexto() {
  const nuevoTexto = document.getElementById("nuevoTexto");
  if (nuevoTexto) {
    document.body.removeChild(nuevoTexto);
  }
}

btnCambiarTexto.addEventListener("click", cambiarTexto);
btnCambiarColor.addEventListener("click", cambiarColor);
btnCambiarAlineacion.addEventListener("click", cambiarAlineacion);
btnCrearTexto.addEventListener("click", crearTexto);
btnBorrarTexto.addEventListener("click", borrarTexto);
