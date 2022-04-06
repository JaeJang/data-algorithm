/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    nums[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; ++i) {
        nums[i] = Math.max(nums[i-1], nums[i] + nums[i-2]);
    }
    
    return nums[nums.length - 1];
};

/*
[2,7,9,3,1,5]

[2,7,11,11,12,16]

[2,1,1,2]
[2,2,3,4]


[1,2,3,1]
[1,2,4,4]
*/