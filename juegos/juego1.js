const circle = document.getElementById("circle");
const msg = document.getElementById("msg");
let ok = false;

circle.style.fontSize = "80px";

setInterval(() => {
  ok = Math.random() > 0.6;
  circle.style.color = ok ? "#7CFF7C" : "#FF6B6B";
}, 800);

circle.onclick = () => {
  if (ok) {
    msg.innerText = "Bien hecho";
    setTimeout(() => {
      window.location.href = "../cartas/carta1.html";
    }, 800);
  } else {
    msg.innerText = "Inténtalo otra vez";
  }
};
