function inArray(array1,array2){
    const res = []

    for (let i = 0; i < array2.length; i++) {
        for (let x = 0; x < array1.length; x++) {
            const a1El = array1[x];
            const a2El = array2[i];
            if (a2El.includes(a1El)) {
                res.push(a1El)
            }
        }
    }

    return res.filter((el, i, a) => a.indexOf(el) === i).sort((a, b) => {
        const _a = a.toLowerCase();
        const _b = b.toLowerCase();

        if (_a < _b) {
            return -1;
        }

        return 1;
    })
}