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
localStorage
var greet = greetingsExercise(count);
displayGreetCount.innerHTML = count

btnGreet.addEventListener('click', function () {
    var languageElem = document.querySelector('input[class="language"]:checked')
    var name = nameElement.value;
    count = greet.countGreet(name);

    if (languageElem && name) {
        var language = languageElem.value
        var greeting = greet.makeGreet(name, language)
        localStorage['countGreetings'] = count
        localStorage['names'] = greet.getNames()

        displayGreeting.innerHTML = greeting;
        displayGreetCount.innerHTML = localStorage['countGreetings']
    }
    else {
        displayGreeting.innerHTML = greet.errors(name, languageElem)
    }
})

resetBtn.addEventListener('click', function () {
    localStorage.clear();
    displayGreetCount.innerHTML = ''
    displayGreeting.innerHTML = ''
    count = 0
})
