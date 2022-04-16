/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let count = sum = 0;
    const prefixSum = { 0:1 };
    
    for (let num of nums) {
        sum += num;
        count += prefixSum[sum - k] || 0;
        prefixSum[sum] = prefixSum[sum] + 1 || 1;
    }
    return count;
};

/*
[1,2,3,4,3] k = 3

{0:1}

1
sum=1
{0:1, 1:1}

2
sum=3, count += prefixSum[3-3] = 1
{0:1,1:1,3:1}

3
sum=6, count += prefixSum[6-3] = 1
{0:1,1:1,3:1,6:1}

4
sum=10, count += prefixSum[10-3] = 0
{0:1,1:1,3:1,6:1,10:1}

3
sum=13, count += prefixSum[13-3] = 1

[1,-1,1,1,1,1] k=2
{0:1}

1
sum=1
{0:1,1:1}

-1
sum=0
{0:2,1:1}

1
sum=1
{0:2,1:2}

1
sum=2, count += prefixSum[2-2] = 2 -> there are two ways to make 2 by removing left elements
{0:2,1:2,2:1}

1
sum=3, count += prefixSum[3-2] = 1
{0:2,1:2,2:1,3:1}

1
sum=4, count += prefixSum[4-2] = 1
*/