// A string is called balanced when every letter occurring in the string appears both in upper- and lowercase. For example, the string 'CATattac' is balanced (a, c, and t occur in both cases), but 'Madam' is not (d and a appear only in lower case). Note that the number of occurrences does not matter.
// Write a function that, given a string S of length N, returns the length of the shortest balanced fragment of S. If S does not contain any balanced fragments, the function should return -1.
// Examples:
// balancedFragmentLength('azABaabza') // shortest balanced fragment is 'ABaab', returns 5
// balancedFragmentLength('TacoCat') // there is no balanced fragment, returns -1
// balancedFragmentLength('AcZCbabz') // shortest balanced fragment is whole string, returns 8
// balancedFragmentLength('abcdefghijklmnopqrstuvwxyz') // no balanced fragment, returns -1

function balancedString(string) {
    let length = 0
    let frequencyCounter = {}

    for (char in string) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1

    }

    if (frequencyCounter[key] === frequencyCounter[key].toLowerCase()) {
        length++
    }

    else {
        length = -1
    }


    return length
}


function balancedString(string) {
    let array = Array.from(string);
    let fragArray = []
    let i = 0;
  
    for (var j = 1; j < array.length; j++) {
      if (array[i] === array[j].toLowerCase()) {
            fragArray.push(i)
            fragArray.push(j)
            i++
      }
      
      
    }
  
    return fragArray;
  }