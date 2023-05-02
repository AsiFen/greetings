//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');
var resetBtn = document.querySelector('.reset')
var displayGreetCount = document.querySelector('.countGreets')

var count = 0

if (localStorage.getItem('countGreetings')) {
    count = Number(localStorage.getItem('countGreetings'))
}

var greet = greetingsExercise(count);

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

            setTimeout(() => {
                displayGreeting.innerHTML = '';

            }, 1000);
        }
        else {
            displayGreeting.innerHTML = "Enter alphabets only"
            displayGreeting.classList.add('danger')

            setTimeout(() => {
                displayGreeting.classList.remove('danger')
                displayGreeting.innerHTML = ''

            }, 1000)
        }
    }
    else {
        displayGreeting.innerHTML = greet.errors(name, languageElem)
        displayGreeting.classList.add('danger')

        setTimeout(() => {
            displayGreeting.classList.remove('danger')
            displayGreeting.innerHTML = ''

        }, 1500);
    }
    nameElement.value = ''
})

resetBtn.addEventListener('click', function (event) {
    event.preventDefault();

    localStorage.clear();

    displayGreetCount.innerHTML = ''
    count = 0

    displayGreeting.innerHTML = "Reset successful!"
    displayGreeting.classList.add('green')

    setTimeout(() => {
        displayGreeting.classList.remove('green')
        displayGreeting.innerHTML = ''

    }, 3000)
})
