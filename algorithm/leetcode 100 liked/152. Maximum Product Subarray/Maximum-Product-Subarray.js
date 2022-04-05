1/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let min = max = nums[0];
    let largest = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        // when multipling by a minus value, 
        // biggest becomes smallest
        // smallest becomes biggest
        if (nums[i] < 0) {
            const tmp = max;
            max = min;
            min = tmp;
        }
        min = Math.min(nums[i], nums[i] * min);
        max = Math.max(nums[i], nums[i] * max);
        
        if (max > largest) largest = max;
    }
    
    return largest;
};

/*
[-2, 3, 2, -2,   1, -4]

[-2, 3, 6,  24,  24, 48]
[-2,-6,-12,-12, -12, -96]

*/