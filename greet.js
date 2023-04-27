//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');
var resetBtn = document.querySelector('.reset')
var displayGreetCount = document.querySelector('.countGreets')

var greeting = ''
var getStorage = 0
var count = 0

getStorage = localStorage.getItem('countGreetings')
if (getStorage) {
    count = Number(getStorage)
}
var greet = greetingsExercise(count);
displayGreetCount.innerHTML = count

displayGreeting.innerHTML = greeting;
console.log(greeting);

btnGreet.addEventListener('click', function (event) {
    event.preventDefault();
    var languageElem = document.querySelector('input[name="language"]:checked')
    var name = nameElement.value;
    if (languageElem && name) {
        var language = languageElem.value
        greeting = greet.makeGreet(name, language)
        count = greet.countGreet();
        localStorage['countGreetings'] = count
        localStorage['names'] = greet.getNames()
        displayGreeting.innerHTML = greeting;
        displayGreetCount.innerHTML = localStorage['countGreetings']

        setTimeout(() => {
            displayGreeting.innerHTML = '';

        }, 1000);
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
    // displayGreeting.innerHTML = ''
    count = 0
 
    displayGreeting.innerHTML = "Reset successful!"
    displayGreeting.classList.add('green')

    setTimeout(() => {
        displayGreeting.classList.remove('green')
        displayGreeting.innerHTML = ''

    }, 1000)
})
