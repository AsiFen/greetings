//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayElement = document.querySelector('.display');

// query select the checked radio button
var greeting = ''
// function that greets a user with their name and hello
function greet() {
    var languageElement = document.querySelector('input[class="language"]:checked');
    var name = nameElement.value;
    if (languageElement) {
        var checkedLanguage = languageElement.value;
        if (checkedLanguage == 'english') {
            greeting = 'Hello, ' + name
        }
        if (checkedLanguage == 'swahili') {
            greeting = 'Jambo, ' + name
        }
        if (checkedLanguage == 'isiXhosa') {
            greeting = 'Molo, ' + name
        }
    }
    displayElement.innerHTML = greeting;
}
//when btnGreet is clicked my function must be executed
btnGreet.addEventListener('click', greet)