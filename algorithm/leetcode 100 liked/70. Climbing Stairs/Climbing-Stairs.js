/**
 * @param {number} n
 * @return {number}
 */
 var climbStairsV2 = function(n) {
    if (n <= 2) return n;
    
    let last_last = 1;
    let last = 2;
    
    for (let i = 2; i < n; ++i) {
        let tmp = last;
        last += last_last;
        last_last = tmp;
    }
    
    return last;
    
};


 var climbStairs = function(n) {
    if (n <= 2) return n;
    
    const path = [1,2];
    for (let i = 2; i < n; ++i) {
        path[i] = path[i-2] + path[i-1];    
    }
    return path[n-1];
};