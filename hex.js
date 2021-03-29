const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//1. create an event for the button
//2. generate a loop to set up a random color
//3. each time a loop runs, the random value generated gets stored in hexColor. so we cant use const



btn.addEventListener("click", function(){
    let hexColor = "#";

for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}