function canJump(nums: number[]): boolean {
    
    let i = 0;
    let max = 0;
    
    for (; i < nums.length && i <= max; ++i) {
        max = Math.max(i + nums[i], max)
    }
    
    return i === nums.length;
    
};

function canJumpV2(nums: number[]): boolean {
    
    let last = nums.length - 1;
    let i = nums.length-2;
    for (;i >= 0; --i) {
        if (i + nums[i] >= last) last = i
    }
    
    return last <= 0;
};