function biggestOf3Numbers(num1, num2, num3) {
    let largest;
    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num3 && num2 >= num1) {
        largest = num2;
    } else {
        largest = num3;
    }
    console.log(largest)
}

biggestOf3Numbers(130, 5, 99);
