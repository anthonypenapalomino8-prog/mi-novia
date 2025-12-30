

let contador = 0;

function sumar() {
  contador++;
  document.getElementById("count").innerText = contador + " / 10";

  if (contador >= 10) {
    window.location.href = "../cartas/carta2.html";
  }
}
