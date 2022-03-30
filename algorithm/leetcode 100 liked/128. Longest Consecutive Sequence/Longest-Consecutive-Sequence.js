/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const map = {}
    let largest = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (!map[nums[i]]) {
            const left = map[nums[i]-1] ? map[nums[i]-1] : 0;
            const right = map[nums[i]+1] ? map[nums[i]+1] : 0;
            
            const sum = left + right + 1;
            largest = Math.max(sum, largest);
            
            map[nums[i]] = sum;
            
            map[nums[i]-left] = sum;
            map[nums[i]+right] = sum;
        }
    }
    
    return largest;

};

/*
[0,3,7,2,5,8,4,6,0,1]
 1,4,2,7,4,7,4,7,
*/


var longestConsecutiveV2 = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for (let num of set) {
        if (!set.has(num-1)) {
            let count = 1;
            while(set.has(++num)) {
                ++count;
            }
            max = Math.max(count, max)
        }
    }
    return max;
};