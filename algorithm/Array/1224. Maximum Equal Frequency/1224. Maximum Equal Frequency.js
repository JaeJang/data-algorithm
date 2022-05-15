/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxEqualFreq = function(nums) {
    const counts = {};
    const freqs = {};
    let result = 0;
    for (let i = 0; i < nums.length; ++i) {
        counts[nums[i]] = counts[nums[i]] + 1 || 1;
        const freq = counts[nums[i]];
        
        freqs[freq] = freqs[freq] + 1 || 1;
        
        const count = freqs[freq] * freq;
        
        if (count === i + 1 && i < nums.length - 1) {
            result = Math.max(result, i + 2);
        } else if (count === i) {
            result = Math.max(result, i + 1);
        }
    }
    return result;
};