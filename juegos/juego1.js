const palabras = ["esperar", "amor", "tiempo", "confianza"];
let cartas = [...palabras, ...palabras].sort(() => Math.random() - 0.5);

const grid = document.getElementById("grid");
let seleccion = [];
let aciertos = 0;

cartas.forEach(p => {
  const c = document.createElement("div");
  c.className = "card";
  c.textContent = "❓";
  c.onclick = () => voltear(c, p);
  grid.appendChild(c);
});

function voltear(card, texto) {
  if (seleccion.length === 2 || card.classList.contains("ok")) return;

  card.textContent = texto;
  seleccion.push({ card, texto });

  if (seleccion.length === 2) {
    if (seleccion[0].texto === seleccion[1].texto) {
      seleccion.forEach(c => c.card.classList.add("ok"));
      aciertos++;
      seleccion = [];
      if (aciertos === palabras.length) {
        setTimeout(() => location.href = "../cartas/carta1.html", 800);
      }
    } else {
      setTimeout(() => {
        seleccion.forEach(c => c.card.textContent = "❓");
        seleccion = [];
      }, 700);
    }
  }
}
