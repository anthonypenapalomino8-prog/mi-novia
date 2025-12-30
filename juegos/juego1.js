let puntos = 0;

function tocar() {
  puntos++;
  document.getElementById("contador").innerText = puntos + " / 5";

  if (puntos >= 5) {
    window.location.href = "../cartas/carta1.html";
  }
}


