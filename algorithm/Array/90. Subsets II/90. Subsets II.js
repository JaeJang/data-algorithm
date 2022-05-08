/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums.sort();
    
    const result = [];
    
    const backtract = (curIndex, path) => {
        //result.push(path);
        result.push(path.slice());

        for (let i = curIndex; i < nums.length; ++i) {
            if (i > curIndex && nums[i] === nums[i-1]) continue;
            
            //backtract(i + 1, path.concat(nums[i]))
            path.push(nums[i])
            backtract(i + 1, path)
            path.pop();
        }
    }
    
    backtract(0, []);
    
    return result;
};