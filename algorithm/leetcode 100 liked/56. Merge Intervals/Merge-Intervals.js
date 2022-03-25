/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((l,r) => l[0] - r[0]);
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; ++i) {
        const lastAdded = result[result.length - 1];
        if (lastAdded[1] >= intervals[i][0]) {
            lastAdded[1] = Math.max(lastAdded[1], intervals[i][1])
        } else {
            result.push(intervals[i])
        }
    }
    return result;
};