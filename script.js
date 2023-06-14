let p=document.getElementById("status");
// console.log(p.innerText);
let btn=document.getElementById("enterBtn");
let div=document.getElementById("div");
btn.addEventListener("click",change);
function change(){
    // console.log("hii");
    p.remove();
    let h1=document.createElement("h1");
    h1.innerText="Entered Metaverse";
    div.appendChild(h1);
}
