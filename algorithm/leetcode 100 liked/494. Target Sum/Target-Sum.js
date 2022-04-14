/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWaysV2 = function(nums, target) {
    const total = nums.reduce((pre,cur) => pre + cur, 0);
    const dp = Array.from({length: nums.length}, () => Array(total*2 + 1))

    const dfs = (i, total) => {
        if (i === nums.length) {
            if (total === target) return 1;
            return 0;
        }
        if (dp[i] && dp[i][total]) return dp[i][total];
        
        dp[i][total] = dfs(i + 1, total + nums[i]) + dfs(i + 1, total - nums[i]);
        return dp[i][total];
    }
    
    return dfs(0,0);
};

 var findTargetSumWays = function(nums, target) {
    let arr = [];
    arr.push(nums[0]);
    arr.push(-nums[0]);
    
    for (let i = 1; i < nums.length; ++i) {
        const tmpArr = [];
        for (let element of arr) {
            tmpArr.push(element + nums[i]);
            tmpArr.push(element - nums[i]);
        }
        arr = tmpArr;
    }
    let count = 0;
    for (let element of arr) {
        if (element === target) ++count;
    }
    return count;
};

/*
{1,-1}
{2 0 0 -2}
{3 2 1 -1 1 -1 -1 3}

*/