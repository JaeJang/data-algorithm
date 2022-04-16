/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperaturesV2 = function(temperatures) {
    const res = Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; ++i) {
        while (stack.length && temperatures[stack[stack.length-1]] < temperatures[i]) {
            const prev = stack.pop();
            res[prev] = i - prev;
        }
        stack.push(i)
    }
    return res;
};

/*
[73,74,75,71,69,72,76,73]

73
[0,0,0,0,0,0,0,0]
[0]

74
[1,0,0,0,0,0,0,0]
[1]

75
[1,1,0,0,0,0,0,0]
[2]

71   -> 75 > 71
[1,1,0,0,0,0,0,0]
[2,3]

69   -> 71 > 69
[1,1,0,0,0,0,0,0]
[2,3,4]

72 i = 5
[1,1,0,0,0,0,0,0]
[2,3,4]
[1,1,0,0,1,0,0,0]
[2,3]
[1,1,0,2,1,0,0,0]
[2,5]

76 i = 6
[1,1,4,2,1,1,0,0]
[6]

73 i = 7
[1,1,4,2,1,0,0,0]
[6,7]
*/

 var dailyTemperatures = function(temperatures) {
    const res = Array(temperatures.length).fill(0);
    
    for (let i = temperatures.length - 2; i >= 0; --i) {
        if (temperatures[i] < temperatures[i+1]) {
            res[i] = 1;   
            continue;
        } else if (temperatures[i+1] === 0) {
            continue;   
        } else {
            let start = i + 1 + res[i+1];
            let count = 1 + res[i+1];
            while (start < temperatures.length) {
                if (temperatures[start] > temperatures[i]) break;
                if (res[start] === 0) {
                    count = 0;
                    break;
                }
                count += res[start];
                start += res[start];
            }
            res[i] = count;
        }
    }
    return res;
};

/*
[73,74,75,71,69,72,76,73]
76
[0,0,0,0,0,0,0,0]
72
[0,0,0,0,0,1,0,0]
69
[0,0,0,0,1,1,0,0]
71
[0,0,0,2,1,1,0,0]
75
[0,0,0,2,1,1,0,0]

*/