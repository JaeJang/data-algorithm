/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroesV2 = function(nums) {

    for (let i = lastZeroIndex = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            const tmp = nums[i];
            nums[i] = nums[lastZeroIndex];
            nums[lastZeroIndex++] = tmp;
        }
    }
};

 var moveZeroes = function(nums) {
    let size = nums.length;
    let i = 0;
    
    while(size > 0) {
        if (nums[i] === 0) {
            nums.push(0)
            nums.splice(i, 1);
        } else {
            ++i;
        }
        --size;
    }
};

/*
0 1 0 3 12
1 0 3 12 0 i = 0 size = 4
1 0 3 12 0 i = 1 size = 3
1 3 12 0 0 i = 1 size = 2
1 3 12 0 0 i = 2 size = 1
1 3 12 0 0 i = 3 size = 0

0 0 1 1 0 0 3 12
1 0 0 1 0 0 3 12
1 1 0 0 0 0 3 12
1 1 3 0 0 0 0 12
1 1 3 12 0 0 0 0


*/