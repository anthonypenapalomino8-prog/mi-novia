const premios = [
  "💋 Un beso",
  "🤗 Un abrazo",
  "📸 Una fotito",
  "🍦 Un heladito",
  "💖 Mucho amor"
];

function lanzar() {
  const random = Math.floor(Math.random() * premios.length);
  document.getElementById("premio").innerText = premios[random];
}
