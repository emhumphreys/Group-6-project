var buttonEl = document.getElementById("changebutton");

buttonEl.addEventListener("mouseover",changeButtonBackground);

buttonEl.addEventListener("mouseout",changeButtonBackgroundBack);

function changeButtonBackground() {buttonEl.style.backgroundColor = 'orange'}

function changeButtonBackgroundBack() {buttonEl.style.backgroundColor = 'blue'}


var textChangeColor = document.getElementsByClassName("holdingtext");

textChangeColor.addEventListener("mouseover",changeColor);

textChangeColor.addEventListener("mouseout",changeColorBack);

function changeColor() {textChangeColor.color = 'green'}
function changeColorBack() {textChangeColor.color = 'white'}