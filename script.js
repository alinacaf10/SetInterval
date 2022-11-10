const button=document.createElement("button")
const p=document.createElement("p")
var a=0;
document.body.append(button)
document.body.append(p)
p.style.width="100px";
button.style.width="100px";
button.innerHTML="BUTTON"
button.addEventListener("click",function(){

    setInterval(() => {
        a++;
    p.innerHTML=a
        
    }, 1000);
})
