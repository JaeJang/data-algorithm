/**
 * @param {number[]} height
 * @return {number}
 */
 var trapV2 = function(height) {
    
    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[left];
    let maxRight = height[right];
    
    let total = 0;
    while (left < right) {
        if (maxLeft > maxRight) {
            --right;
            const sum = maxRight - height[right];
            if (sum > 0) total += sum;
            maxRight = Math.max(maxRight, height[right]);
        }
        else {
            ++left;
            const sum = maxLeft - height[left];
            if (sum > 0) total += sum;
            maxLeft = Math.max(maxLeft, height[left]);
        }
    }
    return total;
};

 var trap = function(height) {
    
    const maxLeft = [];
    const maxRight = [];
    let max = 0;
    maxLeft[0] = 0;
    for (let i = 1; i < height.length; ++i) {
        max = Math.max(max, height[i - 1]);
        maxLeft[i] = max;
    }
    max = height[height.length - 1];
    maxRight[height.lenfth - 1] = 0;
    for (let i = height.length - 2; i >= 0; --i) {
        max = Math.max(max, height[i + 1]);
        maxRight[i] = max;
    }
    
    let total = 0;
    for (let i = 0; i < height.length; ++i) {
        const sum = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if (sum > 0) total += sum;
    }
    return total;
};