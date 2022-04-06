/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargestV2 = function(nums, k) {
    nums.sort((l , r) => l - r);
    
    return nums[nums.length - k];
};

 var findKthLargest = function(nums, k) {
    nums.sort((l , r) => l - r);

    let i = nums.length - 1;
    let count = 0;
    for (; i >= 0; --i) {
        if (++count === k) break;
    }
    
    return nums[i];
};

/*
[3,2,1,5,6,4]

[1,2,3,4,5,6] k = 6

[1]
[1,2]
*/

