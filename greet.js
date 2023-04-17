//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayElement = document.querySelector('.display');

// function that greets a user with their name and hello
function greet(){
    var name = nameElement.value;
    var greeting =  'Hello, '+ name;
    displayElement.innerHTML = greeting;
}
//when btnGreet is clicked my function must be executed
btnGreet.addEventListener('click', greet)