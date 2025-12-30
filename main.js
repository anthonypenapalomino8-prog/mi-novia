function irJuego() {
  const juegos = [
    "juegos/juego1.html",
    "juegos/juego2.html",
    "juegos/juego3.html"
  ];
  const r = Math.floor(Math.random() * juegos.length);
  window.location.href = juegos[r];
}
