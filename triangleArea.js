function triangleArea(a, b, c) {
    let area = (a + b + c) / 2;
    let areaValue = Math.sqrt(area * (area - a) * (area - b) * (area - c));
    console.log(areaValue);
}
triangleArea(3, 5.5, 4);