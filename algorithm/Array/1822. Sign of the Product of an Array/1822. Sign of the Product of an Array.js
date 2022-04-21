/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let numOfMinus = 0;
    
    for (let num of nums) {
        if (num < 0) ++numOfMinus;
        if (num === 0) return 0;
    }
    
    return numOfMinus % 2 === 0 ? 1 : -1;
};