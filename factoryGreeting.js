 function greetingsExercise() {
    var userNames = {}
    var countGreeting = 0
    
    function countGreet(name) {
        if (userNames[name] === undefined) {
            countGreeting++
            userNames[name] = 0
        }
        return countGreeting
    }

    function makeGreet(language, name) {

        if (language) {
            if (language == 'english') {
                return 'Hello, ' + name
            }
            if (language == 'swahili') {
                return 'Jambo, ' + name
            }
            if (language == 'isiXhosa') {
                return 'Molo, ' + name
            }
        }
    }

    function resetCounter(displayElement) {
        countGreet() = 0
        localStorage.clear();
        displayElement.innerHTML = ''
    }

    return {
        resetCounter,
        countGreet,
        makeGreet
    }
}
