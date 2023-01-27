const btn=document.getElementById("btn");

function first(){
    e.preventDefault();
    btn.innerHTML="HERE !";
}



btn.addEventListener("click",first);
btn.addEventListener("click",function(){btn.classList.add("struct");})
btn.addEventListener("click",function(){btn.innerHTML="HERE !";})