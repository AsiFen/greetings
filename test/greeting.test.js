describe('greetings function', function () {
    describe('should greet name with the language selected.', function () {
        it('should greet Asiphe in all 3 languages', function () {

            var greet = greetingsExercise()
            var greet1 = greet.makeGreet("asiPhe", "english")
            var greet2 = greet.makeGreet('asIphe', "isiXhosa")
            var greet3 = greet.makeGreet('aSiphe', "swahili")


            assert.equal('Hello, Asiphe', greet1)
            assert.equal('Molo, Asiphe', greet2)
            assert.equal('Jambo, Asiphe', greet3)

        })
        it('should return that Asisipho was counted once in whichever way the name is written', function () {
            var greet = greetingsExercise(2)
            var makeGreet = greet.makeGreet("asisipho")
            var makeGreet2 = greet.makeGreet("aSisipho")
            var makeGreet3 = greet.makeGreet("asisiphO")

            var countGreet = greet.countGreet()

            assert.equal(countGreet, 3)
        })
        it('should return that language was not selected.', function () {
            assert.equal()

        })
        it('should return that name was not entered.', function () {
            assert.equal()

        })
        it('should return that both language and name were not entered.', function () {
            assert.equal()

        })
        
    });
});