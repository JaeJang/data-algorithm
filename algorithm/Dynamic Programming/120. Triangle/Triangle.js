/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    const dp = Array.from({length: triangle.length}, () => []);
    
    dp[0][0] = triangle[0][0];
    
    for (let i = 1; i < triangle.length; ++i) {
        for (let j = 0; j < triangle[i].length; ++j) {
            if (j === 0) {
                dp[i][j] = triangle[i][j] + dp[i-1][j];    
            } else if (j === triangle[i].length - 1) {
                dp[i][j] = triangle[i][j] + dp[i-1][j-1];
            } else {
                dp[i][j] = triangle[i][j] + Math.min(dp[i-1][j-1] , dp[i-1][j]);    
            }
        }
    }    
    
    return Math.min(...dp[dp.length-1]);
    
};
