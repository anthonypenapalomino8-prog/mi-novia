function verificar() {
  const v = document.getElementById("input").value.toLowerCase();
  if (v === "esperar") {
    location.href = "../cartas/carta3.html";
  } else {
    alert("No es esa palabra… piensa con el corazón.");
  }
}
