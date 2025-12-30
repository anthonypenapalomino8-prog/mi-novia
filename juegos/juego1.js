const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.innerText = "Gracias por jugar";
  btn.disabled = true;

  setTimeout(() => {
    window.location.href = "../cartas/carta1.html";
  }, 1500);
});
