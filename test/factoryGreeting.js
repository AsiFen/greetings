
function greetingsExercise() {
    var userNames = {}
    var greeting = 0
    var countGreeting = 0
    var name = ''
    function countGreet(name1) {
        name = name1.charAt(0).toUpperCase() + name1.slice(1).toLocaleLowerCase()
        if (userNames[name] === undefined) {
            countGreeting++
            userNames[name] += 1
        }
        return countGreeting
    }

    function makeGreet(name1, language) {
        name = name1.charAt(0).toUpperCase() + name1.slice(1).toLocaleLowerCase()
        if (language == 'english') {
            greeting = 'Hello, ' + name
        }
        if (language == 'swahili') {
            greeting = 'Jambo, ' + name
        }
        if (language == 'isiXhosa') {
            greeting = 'Molo, ' + name
        }
        return greeting
    }

    function errors(name, language) {
        if (language == null) {
            return "Language not selected"
        }
        if (name == undefined || name == '') {
            return "Please enter your name please"
        }
    }

    function resetCounter() {
        localStorage.clear();
        displayElement.innerHTML = ''
    }

    // function storeCount() {
    //     localStorage[nameCount] = countGreet()
    //     return localStorage[nameCount]
    // }
    // function getCount(){
    //     countGreet() = localStorage[nameCount]
    //     return countGreet()
    // }

    return {
        // getCount,
        // storeCount,
        resetCounter,
        countGreet,
        makeGreet,
        errors
    }
}
