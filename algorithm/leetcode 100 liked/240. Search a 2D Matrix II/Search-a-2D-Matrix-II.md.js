/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 
 var searchMatrixV2 = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    
    while(row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) ++row;
        else --col;
    }
    
    return false;
    
};


 var searchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix[0].length - 1;
    let mid = 0;
    
    while (start <= end) {
        mid = parseInt((end + start) / 2);
        if (matrix[0][mid] === target) return true;
        else if (matrix[0][mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    const colStop = matrix[0][mid] > target ? mid - 1 : mid;
    start = 0; end = matrix.length - 1;
    while (start <= end) {
        mid = parseInt((end + start) / 2);
        if (matrix[mid][0] === target) return true;
        else if (matrix[mid][0] > target) end = mid - 1;
        else start = mid + 1;
    }
    const rowStop = matrix[mid][0] > target ? mid - 1 : mid;

    let i = 0;
    while (i <= rowStop) {
        start = 0;
        end = colStop;
        while (start <= end) {
            mid = parseInt((end + start) / 2);
            if (matrix[i][mid] === target) return true;
            else if (matrix[i][mid] > target) end = mid - 1;
            else start = mid + 1;
        }   
        ++i;
    }
    return false;
    
};
