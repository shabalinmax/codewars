function duplicateEncode(word){
    const result = [];
    const wordArr = word.toLocaleLowerCase().split('')
    wordArr.forEach((char) => {
        wordArr.filter((x) => x === char).length > 1 ? result.push(')') : result.push('(');
    })
    return result.join('')
}

console.log(duplicateEncode('recede'))