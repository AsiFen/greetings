//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');
var resetBtn = document.querySelector('.reset')
var displayGreetCount = document.querySelector('.countGreets')

var greet = greetingsExercise();
var greeting = ''
var getStorage = greet.getCount()
console.log(getStorage);

var count = 0
btnGreet.addEventListener('click', function () {

    var languageElem = document.querySelector('input[class="language"]:checked')
    var name = nameElement.value;
    count = greet.countGreet(name);
    console.log(greet.storeCount());

    if (languageElem) {
        var language = languageElem.value
        var greeting = greet.makeGreet(name, language)
        console.log(name + language);
    }
    greet.storeCount()
    displayGreeting.innerHTML = greeting;
    displayGreetCount.innerHTML = greet.storeCount()
})
// if (getStorage) {
//     count = getStorage
// }
displayGreetCount.innerHTML = greet.storeCount();

resetBtn.addEventListener('click', function () {
    localStorage.clear();
    displayGreetCount.innerHTML = ''
    displayGreeting.innerHTML = ''
    count = 0
})
