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

    function makeGreet(name, language) {

        if (language == 'english') {
            return 'Hello, ' + name
        }
        if (language == 'swahili') {
            return 'Jambo, ' + name
        }
        if (language == 'isiXhosa') {
            return 'Molo, ' + language
        }
    }


    function errors(name, language) {
        if (language == null) {
            return "Language not selected"
        }
        if (name == undefined || name == '') {
            return "Please enter your name please"
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
