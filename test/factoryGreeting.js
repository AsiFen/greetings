
function greetingsExercise(count) {
    var userNames = {}
    var greeting = 0
    var countGreeting = count
    var name = ''
    let element = ''

    function makeGreet(name1, language) {
        name = name1.charAt(0).toUpperCase() + name1.slice(1).toLocaleLowerCase()
        if (name.match(/^[a-zA-Z]+/)) {
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
        } else {
return "enter alphabetical characters"
        }
    }

    function countGreet() {
        if (userNames[name] === undefined) {
            countGreeting++
            userNames[name] += 1
        }
        return countGreeting
    }

    function getNames() {
        for (let name in userNames) {
            element = name
        }
        return element
    }

    function errors(name, language) {
if (name == '' && language == null) {
            return "Please enter your name and select the language"
        }
        if (language == null) {
            return "Language not selected"
        }
        if (name == '') {
            return "Please enter your name please"
        }
        
    }

    function resetCounter() {
        localStorage.clear();
        displayElement.innerHTML = ''
    }

    return {
        resetCounter,
        countGreet,
        makeGreet,
        errors,
        getNames
    }
}
