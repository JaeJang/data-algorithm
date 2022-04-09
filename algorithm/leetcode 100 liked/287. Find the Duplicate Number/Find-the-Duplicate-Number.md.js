/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    let slow2 = 0;
    while(slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }
    return slow;
    
};

/*
[1,3,4,2,2]
0 -> 3 -> 2 
          |
          4

[3,1,3,4,2]

0 -> 3 -> 4
      \  /
        2
*/