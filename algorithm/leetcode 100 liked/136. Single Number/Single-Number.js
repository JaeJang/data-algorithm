/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let current = nums[0];
    
    for (let i = 1; i < nums.length; ++i) {
        current ^= nums[i];
    }
    
    return current;
};

/*

[4,1,2,1,2]

4 ^ 1 -> (1000) ^ (0001) = 5 (1001)
5 ^ 2 -> (1001) ^ (0010) = 7 (1011)
7 ^ 1 -> (1011) ^ (0001) = 6 (1010)
6 ^ 2 -> (1010) ^ (0010) = 4 (1000)

*/