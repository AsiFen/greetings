
function greetingsExercise(count) {
    var userNames = {}
    var greeting = 0
    var countGreeting = count
    var name = ''
function checkRegex(name) {
    let regex = /^[a-zA-Z]+$/
    return regex.test(name)
    
}
    function makeGreet(name1, language) {
        name = name1.charAt(0).toUpperCase() + name1.slice(1).toLocaleLowerCase()
        if (name.match(/^[a-zA-Z]+$/)) {
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
        else {
            name = ''
            // return "enter alphabetical characters"
        }
    }

    function countGreet() {
        if (name !== '') {
            if (userNames[name] === undefined) {
                countGreeting++
                userNames[name] += 1
            }
            return countGreeting
        }
        else{
            countGreeting +=0
            return countGreeting
        }
    }


    function getNames() {
        let x = Object.keys(userNames)
        return x
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
