/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    for (let i = 2; i < cost.length; ++i) {
        cost[i] = cost[i] + Math.min(cost[i - 2], cost[i - 1])
    }
    
    return Math.min(cost[cost.length-2], cost[cost.length-1])
};

/*
[1,100,1,1,1,100,1,1,100,1]

[1,100,2,3,3,103,4,5,104,6]
*/