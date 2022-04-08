/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const result = [];
    
    result[0] = 1;
    
    for (let i = 1; i < nums.length; ++i) {
        result[i] = nums[i-1] * result[i-1];
    }
    
    let right = 1;
    for (let i = nums.length-1; i >= 0; --i) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
};

/*
 1 2 3 4

pre [1, 1, 2, 6]
post[24, 12, 4, 1]


*/