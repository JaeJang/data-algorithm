/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    points.sort((l, r) => l[0] - r[0]);
    
    let arrows = 1;
    
    let min = points[0][1];
    
    for (let i = 1; i < points.length; ++i) {
        if (min < points[i][0]) {
            ++arrows;
            min = points[i][1];
        } else {
            min = Math.min(min, points[i][1]);
        }
    }
    
    return arrows;
};