//given a sorted array of integers, write a function
// called search, that accepts a value and returns the index where the value 
//passed to the function is located
//if the value is not found, return -1

// search([1,2,3,4,5,6], 4) returns 3
// search([1,2,3,4,5,6], 11) returns -1

//naive solution
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
}

//binary search
function search(arr, value) {
    let min = 0;
    let max = array.length -1;

    while (min <= max) {
        let middle = Math.floor((min + max)/2);
        let currentElement = arr[middle];

        if (arr[middle] < value) {
            min = middle + 1;
        }

        else if (arr[middle] > value) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

[1,2,3,5,6,8,9,12,15,16,29]