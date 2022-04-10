/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// bucket sort
 var topKFrequentV2 = function(nums, k) {
    const map = {};
    
    for (let i = 0; i < nums.length; ++i) {
        map[nums[i]] = map[nums[i]] ? ++map[nums[i]] : 1;
    }
    
    const bucket = Array.from({length: nums.length + 1}, () => []);
    const result = [];
    Object.entries(map).map(entry => bucket[entry[1]].push(entry[0]));
    
    for (let i = bucket.length - 1; i >= 0 && k > 0; --i) {
        if (bucket[i].length) {
            result.push(...bucket[i]);
            k -= bucket[i].length;
        }
    }
    return result;
};

 var topKFrequent = function(nums, k) {
    const map = {};
    
    for (let i = 0; i < nums.length; ++i) {
        map[nums[i]] = map[nums[i]] ? ++map[nums[i]] : 1;
    }
    
    return Object.entries(map)
        .sort((l,r) => r[1] - l[1])
        .map(entry => entry[0])
        .slice(0, k);
};

/*
[1,1,1,2,2,3]
{1: 3, 2: 2, 3: 1}
[[1,3], [2,2], [3,1]]
[1,2,3]
[1,2]
*/