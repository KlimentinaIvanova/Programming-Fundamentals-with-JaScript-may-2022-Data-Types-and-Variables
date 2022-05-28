function primeNumberChecker(input) {
    let prime = Number(input);
    let isPrime = true;
    if (prime > 1) {
        for (let i = 2; i < prime; i++) {
            if (prime % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
primeNumberChecker(81);
