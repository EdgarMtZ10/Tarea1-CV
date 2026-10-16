// Mostrar o ocultar las formas de contacto
const boton = document.querySelector("#btnContacto");
const lista = document.querySelector("#listaContacto");

if (boton && lista) {
  boton.addEventListener("click", function () {
    // Alterna la clase "oculto" si la tiene la quita, si no la tiene la pone
    lista.classList.toggle("oculto");

    // Cambia la flecha según el estado
    if (lista.classList.contains("oculto")) {
      boton.textContent = "Formas de contacto ▼";
    } else {
      boton.textContent = "Formas de contacto ▲";
    }
  });
}