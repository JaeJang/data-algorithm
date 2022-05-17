/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColorsV2 = function(nums) {
  let red = 0;
  let blue = nums.length - 1;
  let i = 0;
  while (red < blue && i <= blue) {
      if (nums[i] === 0) {
          nums[i] = nums[red];
          nums[red++] = 0;
          ++i;
      } else if (nums[i] === 2) {
          nums[i] = nums[blue];
          nums[blue--] = 2;
          --i;
      }
      ++i;
  }
};

 var sortColors = function(nums) {
    let whiteStart =  0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.splice(0, 0, 0);
            ++whiteStart;
        } else if (nums[i] === 1) {
            nums.splice(i, 1);
            nums.splice(whiteStart, 0, 1);
        }
    }
};

/*
2 0 2 1 1 0
|
2 0 2 1 1 0
  |
0 2 2 1 1 0
  | 
0 2 2 1 1 0
      |
0 1 2 2 1 0
      |
0 1 2 2 1 0
        |
0 1 2 2 2 0  
        |
*/