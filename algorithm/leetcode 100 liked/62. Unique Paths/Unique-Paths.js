/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    
    if (m === 1 || n === 1) return 1;
    
    matrix = [];
    for (let i = 0; i < m; ++i) {
        matrix[i] = [];
        for (let j = 0; j < n; ++j) {
            if (i === 0 || j === 0) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = 0;
            }
        }
    }
    
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
        }
    }
    return matrix[m-1][n-1];
};

