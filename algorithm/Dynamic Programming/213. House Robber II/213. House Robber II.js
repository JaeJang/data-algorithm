/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    const withFirst = [nums[0], Math.max(nums[0], nums[1])];
    const withLast = [nums[1], Math.max(nums[1], nums[2])];
    
    for (let i = 2; i < nums.length; ++i) {
        if (i < nums.length - 1) {
            withFirst[i] = Math.max(withFirst[i-1], nums[i] + withFirst[i-2]);
        }
        if (i > 2) {
            withLast[i-1] = Math.max(withLast[i-2], nums[i] + withLast[i-3]);
        }
    }
    
    return Math.max(withFirst[withFirst.length-1], withLast[withLast.length-1]);
    
};