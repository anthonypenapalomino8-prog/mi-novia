const premios = [
  "Un abrazo sincero",
  "Una sonrisa compartida",
  "Un recuerdo bonito",
  "Un café tranquilo",
  "Una conversación honesta",
  "Paz para ambos"
];

document.getElementById("roll").onclick = () => {
  const r = Math.floor(Math.random() * premios.length);
  document.getElementById("result").innerText = premios[r];
};
