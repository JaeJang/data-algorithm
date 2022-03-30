/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const dp = Array(s.length).fill(false);
    
    for (let i = 0; i < s.length; ++i) {
        for (let word of wordDict) {
            if (word === s.substring(i-word.length + 1, i + 1)
               && (dp[i-word.length] || i-word.length === -1)) {
                dp[i] = true;
            }
        }
    }
    return dp[s.length - 1]
};
/*
l
le
lee
leet dp[3] = true
leetc
leetco
leetcod
leetcode -> code === code && dp[4] == true -> dp[7] = true
*/