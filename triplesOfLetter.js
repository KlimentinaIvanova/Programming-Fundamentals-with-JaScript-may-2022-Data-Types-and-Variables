function triplesOfLetters(number) {
    for (let i = 0; i < number; i++) {

        for (let j = 0; j < number; j++) {

            for (let k = 0; k < number; k++) {

                let letter1 = String.fromCharCode(97 + i);
                let letter2 = String.fromCharCode(97 + j);
                let letter3 = String.fromCharCode(97 + k);
                console.log(letter1 + letter2 + letter3);
            }
        }
    }
}
triplesOfLetters(3)
triplesOfLetters(2)