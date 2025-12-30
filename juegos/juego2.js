const words = ["Amor","Amor","Perdón","Perdón"];
let open = [];
let match = 0;

words.sort(()=>Math.random()-0.5);

const grid = document.getElementById("grid");

words.forEach(w=>{
  const c=document.createElement("div");
  c.className="card";
  c.innerText="❓";
  c.onclick=()=>{
    if(open.length<2 && c.innerText==="❓"){
      c.innerText=w;
      open.push(c);
      if(open.length===2){
        if(open[0].innerText===open[1].innerText){
          match++;
          open=[];
          if(match===2){
            setTimeout(()=>location.href="../cartas/carta2.html",700);
          }
        } else {
          setTimeout(()=>{
            open.forEach(x=>x.innerText="❓");
            open=[];
          },700);
        }
      }
    }
  };
  grid.appendChild(c);
});
