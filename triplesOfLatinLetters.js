function triplesOfLatinLetters(number) {

    for (let i = 0; i < number; i++) {
        let letterA = String.fromCharCode(97 + i)
        for (let j = 0; j < number; j++) {
            let letterB = String.fromCharCode(97 + j)
            for (let k = 0; k < number; k++) {
                let letterC = String.fromCharCode(97 + k)
                console.log(`${letterA}${letterB}${letterC}`)
            }
        }
    }

}
triplesOfLatinLetters(3)