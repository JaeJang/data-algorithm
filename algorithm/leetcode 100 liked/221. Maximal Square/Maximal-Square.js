/**
 * @param {character[][]} matrix
 * @return {number}
 */
// DP
 var maximalSquareV2 = function(matrix) {
    for (let i = matrix.length-2; i >= 0; --i) {
        for (let j = matrix[i].length-2; j >= 0; --j) {
            if (matrix[i][j] == 0) continue;
            
            const right = matrix[i][j+1];
            const diagonal = matrix[i+1][j+1];
            const down = matrix[i+1][j];
            if (right != 0 && diagonal != 0 && down != 0) {
                matrix[i][j] = Math.min(right,Math.min(diagonal,down)) + 1;
            }
        }
    }
    let max = 0;
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            max = Math.max(max, matrix[i][j])
        }
    }
    return max * max;
};


 var maximalSquare = function(matrix) {
    let max = 0;
    
    for (let i = 0; i < matrix.length - max; ++i) {
        for (let j = 0; j < matrix[i].length - max; ++j) {
            if (matrix[i][j] === "0") continue;
            const currentMax = checkSquare(matrix, i, j);
            max = Math.max(currentMax, max);
        }
    }
    return max*max;
};

function checkSquare(matrix, i, j) {
    const maxWidth = Math.min(matrix[i].length - j, matrix.length - i);
    let max = 1;
    for (let z = 1; z < maxWidth; ++z) {
        for (let r = 0; r <= z; ++r) {
            if (matrix[i+r][j+z] === "0") return max;
            if (matrix[i+z][j+r] === "0") return max;
        }
        ++max;
        
    }
    return max;
}


/*
i = 1, j = 2
    z=1
    (1,3) (2,3)
    (2,2) (2,3)
    z=2
    (1,4)(2,4)(3,4)


*/