/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const result = Array(n+1);
    result[0] = 0;
    
    for (let i = 1; i < result.length; ++i) {
        result[i] = result[parseInt(i/2)] + i%2;
    }
    return result;
};

/*

when num divide by 2, num >> 1

0 --> 0     0
1 -->    1  1

2 -->   10  1
3 -->   11  2

4 -->  100  1
5 -->  101  2
6 -->  110  2
7 -->  111  3

8 --> 1000  1
9 --> 1001  2
10 -> 1010  2
11 -> 1011  3
12 -> 1100  2
13 -> 1101  3
14 -> 1110  3
15 -> 1111  4

16 ->10000  1
17 ->10001  2
18 ->10010  2
19 ->10011  3
20 ->10100  2
21 ->10101  3
22 ->10110  3
23 ->10111  4
24 ->11000  2
*/