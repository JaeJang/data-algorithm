/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartitionV2 = function(nums) {
    const target = nums.reduce((pre, cur) => pre + cur, 0) / 2;
    let set = new Set();
    
    set.add(0);
    
    for (let num of nums) {
        const tmpSet = new Set()
        for (let element of set) {
            if (element + num === target) return true;
            tmpSet.add(element);
            tmpSet.add(element + num);
        }
        set = tmpSet;
    }
    return false;
};

/*
{0,1,5,1,11}

{0,1,2,3,4,5,6,7,8,9,10}
*/

 var canPartition = function(nums) {
    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    
    const dfs = (nums, path) => {
        const subSum = path.reduce((pre, cur) => pre + cur, 0);
        if (sum - subSum === subSum) return true;
        if (!nums.length) return false;
        
        for (let i = 0; i < nums.length; ++i) {
            if (dfs(nums.slice(i+1), path.concat(nums[i]))) return true;
        }
        return false;
    }
    
    return dfs(nums.slice(1), [nums[0]]);
};

/*
[1] [5,11,5]
    [1,5] [11,5]
        [1,5,11] [5]
            [1,5,11,5]
        [1,5,5]

[1] [2,3,5]
    [1,2] [3,5]
        [1,2,3] [5]
            [1,2,3,5]
        [1,2,5]
    [1,3] [5]
        [1,3,5]
    [1,5]
*/