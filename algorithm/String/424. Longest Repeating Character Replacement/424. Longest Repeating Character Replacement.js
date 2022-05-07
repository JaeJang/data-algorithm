/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    const counts = {}
    
    let left = maxFreq = result = 0;
    
    for (let right = 0; right < s.length; right++) {
        counts[s[right]] = counts[s[right]] + 1 || 1;
        
        maxFreq = Math.max(maxFreq, counts[s[right]]);
        
        while (right - left + 1 - maxFreq > k) {
            --counts[s[left]];
            ++left;
        }
        
        result = Math.max(result, right - left + 1);
    }
    return result;
};