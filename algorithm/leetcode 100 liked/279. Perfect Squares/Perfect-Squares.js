/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    const numsToUse = [];
    let currentNum = 1;
    while(currentNum <= parseInt(Math.sqrt(n))) {
        numsToUse.push(currentNum*currentNum);
        ++currentNum;
    }
    let level = 0;
    let queue = [0];
    while (queue.length) {
        ++level;
        let tmp = [];
        while (queue.length) {
            const cur = queue.shift();
            for (let num of numsToUse) {
                if (num + cur === n) return level;
                if (num + cur < n && num >= cur) tmp.push(num+cur);
            }
        }
        queue = tmp;
    }
    
    return level;
};

/*
n = 12
                0
             /  |  \
            1   4   9
          / | \   \    \
        5   9  10   8    10
      / |   |  |    |
    6   9  10  11   12


*/