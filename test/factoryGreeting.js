
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
            return "Enter alphabets only"
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
        let users_name = Object.keys(userNames)
        return users_name
    }

    function errors(name, language) {
        if (name == '' && language == null) {
            return "Please enter name and select language."
        }
        if (language == null) {
            return "Language not selected."
        }
        if (name == '') {
            return "Please enter your name."
        }

    }

 

    return {
      //  resetCounter,
        countGreet,
        makeGreet,
        errors,
        getNames
    }
}
