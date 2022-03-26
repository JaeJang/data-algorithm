/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    if (target < matrix[0][0] || target > matrix[m-1][n-1]) return false;
    
    let i = 1
    for (; i < m; ++i) {
        if (target >= matrix[i-1][0] && target < matrix[i][0]) {
            break;
        }
    }
    i -=1
    return bSearch(matrix[i], 0, matrix[i].length, target);
};

function bSearch(list, start, end, target) {
    if (start > end) return false;
    
    const mid = parseInt((start + end) / 2);
    if (list[mid] === target) return true;
    
    if (list[mid] > target) return bSearch(list, start, mid-1,target);
    else return bSearch(list, mid+1, end, target)
}