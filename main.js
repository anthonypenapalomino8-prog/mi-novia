function irJuego(n) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = `juegos/juego${n}.html`;
  }, 500);
}
