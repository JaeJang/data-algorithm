/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1);
    
    for (let i = nums.length - 2; i >= 0; --i) {
        for (let j = i+1; j < nums.length; ++j) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);    
            }
        }
    }
    
    return Math.max(...dp);
};


/*
[0,1,0,3,2,3]
dp[5] = 1
dp[4] = max(1, dp[5] + 1)
dp[3] = max(1)
dp[2] = max(1, dp[3] + 1, dp[4] + 1, dp[5] + 1)
dp[1] = max(1, dp[3] + 1, dp[4] + 1, dp[5] + 1)
dp[0] = max(1, dp[1] + 1, dp[3] + 1, dp[4] + 1, dp[5] + 1)

[0,1,0,3,2,3]

[1,1,1,1,1,1]
[1,1,1,1,2,1]
[1,1,1,1,2,1]
[1,1,3,1,2,1]
[1,3,3,1,2,1]
[4,3,3,1,2,1]
*/