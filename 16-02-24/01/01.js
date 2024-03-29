export const missingNumber = function (nums) {
    let n = nums.length;

    let sum = n*(n+1)/2;

    for(let i = 0; i<n; i++) {
        sum -= nums[i];
    }

    return sum;
};

// Sample Tests
console.log(missingNumber([3, 0, 1])); // returns 2
console.log(missingNumber([0, 1])); // returns 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // returns 8
