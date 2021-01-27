// write a function called sumZero which accepts
// a sorted array of integers. The function should find
// the first pair where the same is 0
// return an array that inclues the values that sum to 0
// or undefined if pair does not exist

function sumZero(sortedArray) {
    let left = 0
    let right = sortedArray.length - 1
    while (left < right) {
        let sum = sortedArray[left] + sortedArray[right]
        if (sum === 0) {
            return [sortedArray[left], sortedArray[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }

}

// implement a function called countUniqueValues which 
// accepts a sorted array and counts the unique values 
// in the array. There can be negative numbers, but it will
// always be sorted.

//not quite
// function countUniqueValues(array){
//     let values = 0
//     let i = 0
//     let j = 1
//     while (j <= array.length) {
//         if (array[i] !== array[j]) {
//             values = 2
//             j++
//             }
//     }    
//             return values   
//     }

function countUniqueValues(array){
    if (array.length === 0 ) return 0
    let i = 0
    for (var j = 1; j<array.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        
    }
    return i + 1
}

// O(n)