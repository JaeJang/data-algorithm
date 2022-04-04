/**
 * @param {number[]} nums
 * @return {number}
 */

// Boyer-Moore Voting Algorithm
 var majorityElementV2 = function(nums) {
    let count = 1;
    let majority = nums[0];
    
    for (let i = 1; i < nums.length; ++i) {
        if (count === 0) {
            count = 1;
            majority = nums[i];
        } else if (majority === nums[i]) {
            ++count;   
        } else --count;
    }
    return majority;
     
};

 var majorityElement = function(nums) {
    const sorted = nums.sort();
    
    let max = curCount = 1;
    let curElement = sorted[0];
    let maxElement = sorted[0];
    
    for (let i = 1; i < sorted.length; ++i){
        if (curElement === sorted[i]) ++curCount;
        else {
            curElement = sorted[i];
            curCount = 1;
        }
        if (curCount > max) {
            max = curCount;
            maxElement = curElement;
        }
    }
    
    return maxElement;
     
};