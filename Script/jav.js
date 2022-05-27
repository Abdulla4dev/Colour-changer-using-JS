const hex =[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "E","F"];
const colours = ["green","red","rgba(133,122,200)","#f115025","yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor = "#";
for (let i = 0; i < 6; i++){
    hexColor += hex[showRandom()];
}
// const randomNumber = showRandom();
document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
});

function showRandom(){
    return Math.floor(Math.random() * hex.length);
}



