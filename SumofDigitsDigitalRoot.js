// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digitalRoot(n) {
    let sum = 0;
    const array = n.toString().split('');
    array.forEach((num) => {
        sum += Number(num);
    });
    if (sum > 9) {
        return digitalRoot(sum);
    }
    return sum;
}

console.log(digitalRoot(12312312))