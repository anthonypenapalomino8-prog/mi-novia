const btn = document.getElementById("btn");
const texto = document.getElementById("texto");

let listo = false;

setTimeout(() => {
  listo = true;
  texto.textContent = "Ahora.";
  document.body.style.background = "#2ecc71";
}, Math.random() * 3000 + 2000);

btn.onclick = () => {
  if (!listo) {
    alert("Aún no… algunas cosas toman tiempo.");
    location.reload();
  } else {
    location.href = "../cartas/carta2.html";
  }
};
