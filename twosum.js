// my solution
function sumOfTwo(array, target) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] !== array[j] && array[i] + array[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }

// sumOfTwo([2,7,11,15], 9)

// sumOfTwo([2,7,3,6,4], 10)

// sumOfTwo([1,7,4,2], 6)

sumOfTwo([2, 11, 15], 9);



//scott's solution

var twoSum = function(nums, target) {    
    const numIndices = {};        
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];        
        let complement = target - num;        
        let indexOfComplement = numIndices[complement];        
        if (indexOfComplement !== undefined) {            
            return [indexOfComplement, i];        
        } else {            
            numIndices[num] = i;        
        }    }        
        return [];}
        ;