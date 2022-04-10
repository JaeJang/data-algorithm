/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChangeV2 = function(coins, amount) {
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i < dp.length; ++i) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    if (dp[amount] !== amount + 1) return dp[amount]
    else return -1;
};

/*
coins = [1,2,5]
dp = [12] * 11
dp[0] = 0
dp[1] = min(12, 1 + dp[0]) = 1
dp[2] = min(12, 1 + dp[1], 1 + dp[0]) = 1
dp[3] = min(12, 1 + dp[2], 1 + dp[1]) = 2
dp[4] = min(12, 1 + dp[3], 1 + dp[2]) = 2
dp[5] = min(12, 1 + dp[4], 1 + dp[3], 1 + dp[0]) = 1
dp[6] = min(12, 1 + dp[5], 1 + dp[4], 1 + dp[1]) = 2
.
.
.
dp[11] = min(12, 1 + dp[10], 1 + dp[9], 1 + dp[6])

*/

 var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    
    let queue = [0];
    let level = 0;
    let seen = new Set();
    while (queue.length) {
        const tmp = [];
        ++level;
        while (queue.length) {
            const cur = queue.shift();
            for (let coin of coins) {
                if (cur + coin === amount) return level;
                if (cur + coin < amount && !seen.has(cur + coin)){
                    tmp.push(cur + coin);
                    seen.add(cur + coin)
                } 

            }    
        }
        
        queue = tmp;
    }
    return -1
};