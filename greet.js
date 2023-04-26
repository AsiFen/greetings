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
                 count = greet.countGreet(name);
        localStorage['countGreetings'] = count
        console.log(count);
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
