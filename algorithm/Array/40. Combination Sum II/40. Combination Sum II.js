/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    candidates.sort();
    const result = [];
    const helper = (curIndex, sum, path) => {
        if (sum > target) return;
        
        if (sum === target) {
            result.push(path);
            return;
        }
        
        for (let i = curIndex; i < candidates.length; ++i) {
            if (i > curIndex && candidates[i] === candidates[i-1]) continue;
            
            helper(i + 1, sum + candidates[i], path.concat(candidates[i]))
        }
    }
    helper(0, 0, []);
    return result;
};

/*
[2,5,2,1,2]

[1,2,2,2,5]

skip the same number once it's processed to avoid duplicated combinations



*/