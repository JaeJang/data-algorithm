/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    const dp = Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;
    
    for (let i = 1; i < s.length; ++i) {
        const oneDigit = parseInt(s.substring(i, i + 1));
        const twoDigit = parseInt(s.substring(i - 1, i + 1));
        
        if (oneDigit > 0) {
            dp[i+1] += dp[i];
        }
        if (twoDigit >= 10 && twoDigit < 27) {
            dp[i+1] += dp[i-1];
        }
    }
    
    return dp[dp.length - 1];
};