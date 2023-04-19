//referencing my html elements
var nameElement = document.querySelector('.name');
var btnGreet = document.querySelector('.greetBtn');
var displayGreeting = document.querySelector('.display');
var resetBtn = document.querySelector('.reset')
var displayGreetCount = document.querySelector('.countGreets')

// // global variables
var greeterName = {}
var count = 0
var greeting = ''
// var countGreet = 0
// function greet() {
//     countGreet = greetingsExercise.countGreet(name)
//var name = nameElement.value;

//     greetingsExercise.makeGreet(checkedLanguage, name)

//     localStorage['countGreetings'] = countGreet;

//     displayGreeting.innerHTML = makeGreet();
//     displayGreetCount.innerHTML = countGreet()


//     if (localStorage['countGreetings']) {
//         countGreet = localStorage['countGreetings']
//     }
// }
// // set it outside the () because the when the page was refreshed the innerhtml clear
// displayGreetCount.innerHTML = countGreet

// btnGreet.addEventListener('click', greet)
//resetBtn.addEventListener('click', resetCounter)

// function that greets a user with their name and hello
function greet() {
    var languageElement = document.querySelector('input[class="language"]:checked');

    // query select the checked radio button
    var name1 = nameElement.value;
    var name = name1.charAt(0).toUpperCase() + name1.slice(1)
console.log(name)
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
console.log(greeting)
    localStorage['countGreetings'] = count;

    displayGreeting.innerHTML = greeting;
    displayGreetCount.innerHTML = count
}

var getStorage = localStorage['countGreetings']
if (getStorage) {
    count = getStorage
}
displayGreetCount.innerHTML = count;


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
