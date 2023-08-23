function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b) => (a - b)).splice(0, 2).reduce((a, b) => a + b);
}

console.log(sumTwoSmallestNumbers([10,40,20,5]))