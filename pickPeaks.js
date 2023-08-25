
function pickPeaks(arr){
   const result = {
       pos: [],
       peaks: []
   };
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] >= arr[i + 1] && arr[i] >= arr[i - 1] && arr[i] !== (arr[i - 1] || arr[i + 1] && arr[i + 1])) {
            result.pos.push(i);
            result.peaks.push(arr[i]);
        }
    }
    return result;
}

console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]))
// assert.deepEqual(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]))
// assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))
// assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2,1]))
// assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2]))
// assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
