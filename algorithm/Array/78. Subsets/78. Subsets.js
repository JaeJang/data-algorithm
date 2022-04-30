/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = [[]];
    
    for (let i = 0; i < nums.length; ++i) {
        result.push([nums[i]]);
        const newNums = nums.slice();
        newNums.splice(0, i + 1)
        helper(newNums, [nums[i]], result)
    }
    
    return result;
};

function helper(nums, path, result) {
    
    for (let i = 0; i < nums.length; ++i) {
        result.push(path.concat(nums[i]));
        const newNums = nums.slice();
        newNums.splice(0, i + 1);
        helper(newNums, path.concat(nums[i]), result);
    }
}

/*
[1,2,3]
[1]
    [1,2]
        [1,2,3]
    [1,3]
    
[2]
    [2,3]
[3]
*/