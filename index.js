// Write your code here!
document.querySelector("main#main").remove(); 

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader); 
newHeader.id= "victory";
newHeader.innerHTML= "<h1>Mari is the champion</h1>";