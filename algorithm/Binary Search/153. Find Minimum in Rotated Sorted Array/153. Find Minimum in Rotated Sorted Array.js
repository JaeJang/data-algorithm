/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let min = Infinity;
    while (start <= end) {
        const mid = parseInt((start + end) / 2);

        min = Math.min(min, nums[mid]);
        
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return min;
};