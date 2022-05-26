function integerFloat(a, b, c) {
    let result = a + b + c;
    let resToString = String(result);
    let isFloat = false;
    for (let i = 0; i < resToString.length; i++) {
        if (resToString[i] === ".") {
            isFloat = true
        }
    }
    console.log(`${result} - ${isFloat ? "Float" : "Integer"}`)
}
integerFloat(9, 100, 1.1)


function amazingNumber(num) {
    let numToString = String(num)
    let result = 0

    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        result += num
    }
    let resultToString = String(result)
    let isAmazing = false
    for (let i = 0; i < resultToString.length; i++) {
        if (Number(resultToString[i]) === 9) {
            isAmazing = true;
            break;
        }
    }
    let amazing = isAmazing ? "True" : "False";
    console.log(`${num} Amazing? ${amazing}`)
}
amazingNumber(1233)

