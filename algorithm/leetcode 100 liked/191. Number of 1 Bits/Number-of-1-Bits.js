/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let counter = 0;
    while (n > 0) {
        ++counter;
        n = n & (n - 1)
    }
    return counter;
};

 var hammingWeight = function(n) {
    let counter = 0;
    while (n > 0) {
        counter += n & 1;
        n >>= 1
    }
    return counter;
};

 var hammingWeight = function(n) {
    let counter = 0;
    while (n > 0) {
        counter += n % 2;
        n = parseInt(n/2)
    }
    return counter;
};