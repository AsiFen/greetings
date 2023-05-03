describe('greetings function', function () {
    describe('should greet name with the language selected.', function () {
        it('should greet Asiphe in all 3 languages', function () {

            var greet = GreetingsExercise()
            var greet1 = greet.makeGreet("asiPhe", "english")
            var greet2 = greet.makeGreet('asIphe', "isiXhosa")
            var greet3 = greet.makeGreet('aSiphe', "swahili")


            assert.equal('Hello, Asiphe', greet1)
            assert.equal('Molo, Asiphe', greet2)
            assert.equal('Jambo, Asiphe', greet3)

        })
        it('should return that Asisipho was counted once in whichever way the name is written', function () {
            var greet = GreetingsExercise(2)
            var makeGreet = greet.makeGreet("asisipho", 'english')
            var makeGreet2 = greet.makeGreet("aSisipho", 'isiXhosa')
            var makeGreet3 = greet.makeGreet("asisiphO", 'swahili')

            var countGreet = greet.countGreet()

            assert.equal(countGreet, 3)
        })
        it('should return that language was not selected.', function () {
            var greet = GreetingsExercise(1)
            var errors = greet.errors('Clara', )
            assert.equal(errors, 'Language not selected.')

        })
        it('should return that name was not entered.', function () {
            var greet = GreetingsExercise(1)
            var errors = greet.errors('', 'swahili')
            assert.equal(errors, 'Please enter your name.')

        })
        it('should return that both language and name were not entered.', function () {
            var greet = GreetingsExercise(1)
            var errors = greet.errors('', )
            assert.equal("Please enter name and select language.", errors)

        })
        it('should return that it greets alphabets only.', function () {
            var greet = GreetingsExercise(1)
            var makeGreet = greet.makeGreet('123', 'swahili')
            assert.equal('Enter alphabets only',makeGreet)
        })

    });
});