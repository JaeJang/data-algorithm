/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        
        if (nums[mid] === target) return mid;
        else if (target < nums[mid]) end = mid - 1;
        else start = mid + 1;
    }
    
    return -1;
};