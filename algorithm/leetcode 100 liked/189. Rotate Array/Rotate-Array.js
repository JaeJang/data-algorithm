/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotateV2 = function(nums, k) {    
    k %= nums.length;
    
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        const tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        ++start; --end;
    }
}

/*
1 2 3 4 5 6 7

*7 6 5 4 3 2 1*
*5 6 7* 4 3 2 1
5 6 7 *1 2 3 4*

*/



 var rotate = function(nums, k) {
    while (nums.length < k) {
        k -= nums.length;
    }
    
    nums.unshift(...nums.slice(nums.length - k, nums.length));
    nums.splice(nums.length - k, nums.length);
};