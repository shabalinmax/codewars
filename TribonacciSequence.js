// Tribonacci Sequence
function tribonacci(signature,n){
    let result = [];
    for (let i = 0; i < n ; i++) {
        if (i < signature.length) {
            result.push(signature[i]);
            continue;
        }
        result.push(result[result.length - 3] + result[result.length - 2] + result[result.length - 1]);
    }
    return result;
}
