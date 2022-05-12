/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositiveV2 = function(nums) {
    const MAX = nums.length + 1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] < 1 || nums[i] > MAX) {
            nums[i] = MAX;
        }
    }
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[Math.abs(nums[i])-1] > 0) {
            nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1];
        }
    }
    
    for (let i = 1; i <= MAX; ++i) {
        if (nums[i-1] > 0) return i;
    }
    
    return MAX;  
};

/*
The maximum number it could possibly return is length + 1;

Since minum numbers are not used, convert them to the max number

Use exiting array as a hashset by appending minus when the number is seen
Use the number element as an key of the hashset
Since the number could be negative integer, use absolute value
[3,4,-1,5,1,2]
[3,4,7,5,1,2]
abs(3) - convert index 2 value as minus
[3,4,-7,5,1,2]
abs(4) - convert index 3 value as minus
[3,4,-7,-5,1,2]
abs(7) - skip
[3,4,-7,-5,1,2]
abs(5) - convert index 4 value as minus
[3,4,-7,-5,-1,2]
abs(1) - convert index 0 value as minus
[-3,4,-7,-5,-1,2]
abs(2) - convert index 1 value as minus
[-3-,4,-7,-5,-1,2]

start from 1 to max value
if i - 1 is negative, it means that i is in the list
ex.
i = 1 -> nums[i-1] = -1 -> number 1 is in the list
*/

 var firstMissingPositive = function(nums) {
    const set = new Set(nums);
    
    let cur = 1;
    while (true) {
        if (!set.has(cur)) return cur;
        ++cur;
    }
};