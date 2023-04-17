//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');

//query select the output for numeber of greetings
var displayGreetCount = document.querySelector('.countGreets')


var greeting = ''
// counter variable
let count = 0
// function that greets a user with their name and hello
function greet() {
    // query select the checked radio button
    var languageElement = document.querySelector('input[class="language"]:checked');
    var name = nameElement.value;
    if (languageElement) {
        var checkedLanguage = languageElement.value;
        if (checkedLanguage == 'english') {
            greeting = 'Hello, ' + name
            count++
        }
        if (checkedLanguage == 'swahili') {
            greeting = 'Jambo, ' + name
            count++

        }
        if (checkedLanguage == 'isiXhosa') {
            greeting = 'Molo, ' + name
            count++

        }
    }
    localStorage.setItem('count',count)
    console.log(localStorage.getItem('count'));
    displayGreetCount.innerHTML = JSON.parse(localStorage.getItem('count'));
    displayGreeting.innerHTML = greeting;
}

//when btnGreet is clicked my function must be executed
btnGreet.addEventListener('click', greet)