const circle = document.getElementById("circle");
let timer;

circle.addEventListener("touchstart", start);
circle.addEventListener("mousedown", start);

circle.addEventListener("touchend", stop);
circle.addEventListener("mouseup", stop);
circle.addEventListener("mouseleave", stop);

function start() {
  circle.style.background = "rgba(255,255,255,0.5)";
  timer = setTimeout(() => {
    circle.innerText = "Gracias";
    setTimeout(() => {
      window.location.href = "../cartas/carta3.html";
    }, 1000);
  }, 3000);
}

function stop() {
  clearTimeout(timer);
  circle.style.background = "rgba(255,255,255,0.2)";
}
