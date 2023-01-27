const btn = document.getElementById("btn");
const myList = document.getElementById("myList");
console.log(btn);
console.log(myList);

btn.addEventListener("click", (event) =>{
myList.classList.toggle("red");
console.log("ok")});

// btn.onclick = function(){ myList.classList.toggle("red")};

