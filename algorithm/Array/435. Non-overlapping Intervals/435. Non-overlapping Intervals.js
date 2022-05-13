/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort((l, r) => l[0] - r[0]);
    
    let result = 0;
    
    let cur = intervals[0];
    
    for (let i = 1; i < intervals.length; ++i) {
        if (cur[1] > intervals[i][0]) {
            if (cur[1] > intervals[i][1]) {
                cur = intervals[i];
            }
            ++result;
        } else {
            cur = intervals[i];
        }
        
    }
    return result;
};