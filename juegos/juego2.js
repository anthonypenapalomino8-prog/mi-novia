const words = ["Amor", "Amor", "Paz", "Paz"];
let shuffled = words.sort(() => 0.5 - Math.random());
let opened = [];
let matched = 0;

const grid = document.getElementById("grid");

shuffled.forEach(word => {
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.word = word;
  div.innerText = "❓";

  div.onclick = () => {
    if (div.classList.contains("open") || opened.length === 2) return;

    div.classList.add("open");
    div.innerText = word;
    opened.push(div);

    if (opened.length === 2) {
      if (opened[0].dataset.word === opened[1].dataset.word) {
        matched++;
        opened = [];
        if (matched === 2) {
          setTimeout(() => {
            window.location.href = "../cartas/carta2.html";
          }, 1000);
        }
      } else {
        setTimeout(() => {
          opened.forEach(c => {
            c.classList.remove("open");
            c.innerText = "❓";
          });
          opened = [];
        }, 800);
      }
    }
  };

  grid.appendChild(div);
});
