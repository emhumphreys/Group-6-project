const input=document.querySelector("#button");

input.addEventListener('click',
function(event) {
    console.log(event);
    console.log(event.target); 
    event.target.innerText="Thanks for subscribing!";
});