function duplicateCount(text) {
    if (text.length === 0) return 0;
    let repeats = new Set()
    const textArr = text.toLocaleLowerCase().split('')
    textArr.forEach(char => {
        if (textArr.filter(el => el === char).length >= 2) {
            repeats.add(char);
        }
    })
    return repeats.size
}

console.log(duplicateCount('Indivisibilities'))