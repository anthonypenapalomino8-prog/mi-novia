let t;
const b = document.getElementById("hold");

b.addEventListener("mousedown",start);
b.addEventListener("touchstart",start);
b.addEventListener("mouseup",stop);
b.addEventListener("touchend",stop);

function start(){
  t=setTimeout(()=>{
    location.href="../cartas/carta3.html";
  },4000);
}

function stop(){
  clearTimeout(t);
}
