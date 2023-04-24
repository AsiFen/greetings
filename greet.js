//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');
var resetBtn = document.querySelector('.reset')
var displayGreetCount = document.querySelector('.countGreets')

var greet = greetingsExercise();
var greeting = ''

var getStorage = 0
var count = 0
btnGreet.addEventListener('click', function () {

    var languageElem = document.querySelector('input[class="language"]:checked')
    var name = nameElement.value;
    count = greet.countGreet(name);

    if (languageElem) {
        var language = languageElem.value
        var greeting = greet.makeGreet(name, language)
        console.log(name + language);
    }
    localStorage['countGreetings'] = count
    displayGreeting.innerHTML = greeting;
    displayGreetCount.innerHTML = localStorage['countGreetings']
})

getStorage = localStorage['countGreetings']
console.log(getStorage);
if (getStorage) {
    count = Number(getStorage)
}
displayGreetCount.innerHTML = getStorage

resetBtn.addEventListener('click', function () {
    localStorage.clear();
    displayGreetCount.innerHTML = ''
    displayGreeting.innerHTML = ''
    count = 0
})
