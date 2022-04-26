/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {    
    const result = n % 2 === 0 ? [] : [0];
    
    for (let i = 1; i <= parseInt(n/2); ++i) {
        result.push(i);
        result.push(-i);
    }
    
    return result;
    
};