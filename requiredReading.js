function requiredReading(num, pagesRead, numberOfDays) {
    let pages = (num / pagesRead)
    let requiredHours = pages / numberOfDays
    console.log(requiredHours)
}
requiredReading(212, 20, 2)