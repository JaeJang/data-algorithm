/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    const letterMap = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E':5, 'F':6, 'G':7,
        'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13,
        'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S':19,
        'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25,
        'Z': 26
    }
    
    let result = 0;
    
    for (let i = columnTitle.length - 1; i >= 0; --i) {
        result += Math.pow(26, columnTitle.length - 1 - i) * letterMap[columnTitle[i]];
    }
    return result;
};

/*
AA = 27  = 26 * 1 + 1
AB = 28 = 26 * 1 + 2
...
AZ = 52 = 26 * 1 + 26
BA = 53 = 26 * 2 + 1
..
BZ = 78 = 26 * 2 + 26


ZY = 701 = 26 * 26 + 25
ZZ = 702 = 26 * 26 + 26

AAA = 703 = 26 * 26 * 1 + 26 * 1 + 1


AAZ = 728 = 26 * 26 * 1 + 26 * 1 + 1
ABA = 729 = 26 * 26 * 1 + 26 * 2 + 1

*/