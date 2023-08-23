
function dirReduc(arr){
    const map = {
        "SOUTH": "NORTH",
        "NORTH": "SOUTH" ,
        "WEST": "EAST" ,
        "EAST": "WEST" ,
    }
    const isNextFake = (subArr) => {
        if (map[subArr[0]] === subArr[1]) {
            return []
        } else {
            return subArr;
        }
    }
    const res = [];
    for (let i = 0; i < arr.length ; i++) {
        if (i === arr.length - 1) {
            continue;
        }
        const isNextFakeData = isNextFake([arr[i], arr[i + 1]])
        if (isNextFakeData.length === 0) {
            i += 2
        } else {
            res.push(...isNextFakeData);
        }
    }
    return res;
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))