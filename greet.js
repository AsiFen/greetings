//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');
var resetBtn = document.querySelector('.reset')
//query select the output for numeber of greetings
var displayGreetCount = document.querySelector('.countGreets')

var greeterName = {}
var greeting = ''
users_name = ''
// counter variable
let count = ''
// function that greets a user with their name and hello
function greet() {
    // query select the checked radio button

    var languageElement = document.querySelector('input[class="language"]:checked');
    var name = nameElement.value;

    if (greeterName[name] === undefined) {
        count++
        greeterName[name] = 0
    }
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
    localStorage['countGreetings'] = count;

    displayGreeting.innerHTML = greeting;
    displayGreetCount.innerHTML = count
}
var getStorage = localStorage['countGreetings']
if (getStorage) {
    count = getStorage
}
// set it outside the () because the when the page was refreshed the innerhtml clear
displayGreetCount.innerHTML = count

function resetCounter() {
    count = 0
    getStorage = 0
    localStorage.clear();

    localStorage.removeItem('countGreetings');
    displayGreetCount.innerHTML = ''
}



//when btnGreet is clicked my function must be executed
btnGreet.addEventListener('click', greet)
resetBtn.addEventListener('click', resetCounter)
