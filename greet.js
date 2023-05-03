//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');
var errorDisplay = document.querySelector('.error')
var resetBtn = document.querySelector('.reset')
var displayGreetCount = document.querySelector('.countGreets')

let errorTimeout;

var count = 0

if (localStorage.getItem('countGreetings')) {
    count = Number(localStorage.getItem('countGreetings'))
}

var greet = GreetingsExercise(count);

// create a function that calls the timeout...

function createMessageReset() {

    // stop any current timeouts
    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
        errorDisplay.classList.remove('danger')
        errorDisplay.innerHTML = ''
    }, 5000)
}


btnGreet.addEventListener('click', function (event) {
    event.preventDefault();
    var languageElem = document.querySelector('input[name="language"]:checked')
    var name = nameElement.value;

    if (languageElem && name) {

        if (name.match(/^[A-Za-z]+$/)) {

            var language = languageElem.value
            displayGreeting.innerHTML = greet.makeGreet(name, language);
            localStorage['countGreetings'] = greet.countGreet();
            localStorage['names'] = greet.getNames()
            displayGreetCount.innerHTML = localStorage['countGreetings']
        }
        else {
            errorDisplay.innerHTML = "Enter alphabets only"
            errorDisplay.classList.add('danger')

            createMessageReset();

        }
    }
    else {
        errorDisplay.innerHTML = greet.errors(name, languageElem)
        errorDisplay.classList.add('danger')

        createMessageReset();

    }
    nameElement.value = ''
})

resetBtn.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.clear();
    displayGreetCount.innerHTML = ''
    count = 0
    if (confirm('Reset the greeter?')) {
        nameElement.value = '';

        errorDisplay.innerHTML = "Reset successful!"
        errorDisplay.classList.add('green')

        setTimeout(() => {
            errorDisplay.classList.remove('green')
            errorDisplay.innerHTML = ''

        }, 5000)
    }
})
