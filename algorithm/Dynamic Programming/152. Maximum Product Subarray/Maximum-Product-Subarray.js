1/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = min = largest = nums[0];
    
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < 0) {
            const tmp = max;
            max = min;
            min = tmp;
        }
        
        max = Math.max(nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i]);
        
        largest = Math.max(largest, max);
    }
    
    return largest;
};

/*
[-2, 3, 2, -2,   1, -4]

[-2, 3, 6,  24,  24, 48]
[-2,-6,-12,-12, -12, -96]

*/