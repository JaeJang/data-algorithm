/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    if (nums.length < 3) return 0;
    let start = count = 0;
    let diff = nums[1] - nums[0];
    
    
    for (let i = 2; i < nums.length; ++i) {
        if (diff === nums[i] - nums[i-1]) {
            if (i - start >= 2) {
                count += (i-start+1) -3 + 1    
            }
        } else {
            diff = nums[i] - nums[i-1];
            start = i - 1;
        }
    }
    
    return count;
};

/*
[-10,1,2,3,100,4,5,6,8,10,12]

[1,2,3,4,5,6,8,10,12]

[1,2,3] 
[1,2,3,4] 
[2,3,4]

[1,2,3,4,5]
[2,3,4,5]
[3,4,5]

[1,2,3,4,5,6]
[2,3,4,5,6]
[3,4,5,6]
[4,5,6]

[1,2,3,4,5,6,8]
*/