/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindromeSubseq = function(s) {
    const dp = Array.from({length: s.length}, () => Array(s.length).fill(0));
    
    for (let i = s.length - 1; i >= 0; --i) {
        dp[i][i] = 1;
        for (let j = i + 1; j < s.length; ++j) {
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i+1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i+1][j]);
            }
        }
    }
    
    return dp[0][s.length-1];
};