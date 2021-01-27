// write a function that takes 2 arrays and returns true if every value in the array 
// has it's corresponding value squared in the second array. Frequency of values must be the same

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)

    }
    return true
}

// O(n^2) nested loops = quadratic



//refactored to O(n) 3 loops, instead of nested loops
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    //same([1,2,3,2], [9,1,4,4])
    let frequencyCounter1 = {} // {1: 1, 2: 2, 3: 1} 
    let frequencyCounter2 = {} //{1: 1, 4: 2, 9: 1}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        //is key squared in frequencyCounter2
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // do their values correspond
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

//Given two strings, write a function to determine 
//if the second string is an anagram of the first

//my first attempt:
function validAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let char of string1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of string2) {
        frequencyCounter2[char] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if(!(char in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }
    return true
}

//Colt Steele:

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }
    const lookup = {} //{a: 1, c: 1, t: 1}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1 
        //if it's already there, add 1, if not initialize it to 1
    }
    for (let i =0; i < second.length; i++) {
        let letter = second[i]
        if (!lookup[letter]) {
            return false //if it's not in the lookup object after looping over first
        } else {
            lookup[letter] -=1; //subtract 1 because we need same frequency of letters
        }
    }
    return true
}
