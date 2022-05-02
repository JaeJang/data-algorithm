/**
 * @param {number} n
 * @return {number}
 */
 var numSquaresV2 = function(n) {
    const dp = Array(n + 1).fill(n);
    dp[0] = 0;
    const numToUse = [];
    
    for (let i = 1; i <= parseInt(Math.sqrt(n)); ++i) {
        numToUse.push(i * i);
    }
    
    for (let i = 1; i <= n; ++i) {
        for (let j = 0; j < numToUse.length; ++j) {
            if (i >= numToUse[j]) {
                dp[i] = Math.min(dp[i], 1 + dp[i - numToUse[j]])
            } else break;
            
        }
    }
    return dp[n];
};

 var numSquares = function(n) {
    const numsToUse = [];
    let currentNum = 1;
    while(currentNum <= parseInt(Math.sqrt(n))) {
        numsToUse.push(currentNum*currentNum);
        ++currentNum;
    }
    let level = 0;
    let queue = [0];
    const seen = new Set();
    while (queue.length) {
        ++level;
        let tmp = [];
        while (queue.length) {
            const cur = queue.shift();
            for (let num of numsToUse) {
                if (num + cur === n) return level;
                if (num + cur < n && num >= cur && !seen.has(num+cur)){
                    tmp.push(num+cur);
                    seen.add(num+cur)
                } 
            }
        }
        queue = tmp;
    }
    
    return level;
};

/*
n = 12
                0       - 0
             /  |  \
            1   4   9   - 1
          /   \   \    
        5     10   8    - 2
               |   |
               11  12   - 3


*/