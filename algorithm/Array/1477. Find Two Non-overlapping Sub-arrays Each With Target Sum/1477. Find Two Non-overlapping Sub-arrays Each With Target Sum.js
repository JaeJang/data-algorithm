/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var minSumOfLengths = function(arr, target) {
    const prefix = {0:-1};
    
    const minLen = [];
    let result = Infinity;
    let best = Infinity;
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
        
        const num = sum - target;
        if (prefix[num] !== undefined) {
            if (prefix[num] > -1) {
                result = Math.min(result, i - prefix[num] + minLen[prefix[num]])
            }
            best = Math.min(best, i - prefix[num]);
        }
        prefix[sum] = i;
        minLen[i] = best;
    }
    
    return result === Infinity ? -1 : result;
    
};