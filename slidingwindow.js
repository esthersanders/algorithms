//write a function called maxSubarraySum which takes
//an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive elements
//in the array

function maxSubarraySum(array, n) {
    if (n > array.length) {
        return null
    }
    var max = -Infinity
    for (let i = 0; i < array.length - n + 1; i++) {
        temp = 0
        for (let j = 0; j < n; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}

//sliding window approach

function maxSubarraySum(array, n) {
    let maxSum = 0;
    let tempSum= 0;
    if (array.length < n) return null;

    for (let i = 0; i < n; i++) {
        maxSum += array[i] //starting at the beginning, find the sum of n integers
    }
    tempSum = maxSum
    for (let i = n; i < array.length; i++) { //starting where you left off, subtract the first of the subarray
        tempSum = tempSum - array[i - n] + array[i];
        maxSum = Math.max(maxSum, tempSum);

    }

    return maxSum;
}
