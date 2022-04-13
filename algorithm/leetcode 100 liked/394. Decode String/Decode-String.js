/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    const stack = [];
    let curString = '';
    let curNum = 0;
    for (let c of s) {
        if (!isNaN(c)) {
            curNum = curNum * 10 + parseInt(c);
        } else if (c === '[') {
            stack.push(curNum);
            stack.push(curString)
            curNum = 0;
            curString = '';
        } else if (c === ']') {
            let prevString = stack.pop();
            let num = stack.pop();
            curString = prevString + Array(num).fill(curString).join('');
        } else {
            curString += c;
        }
    }
    return curString;
};

/*
s = "3[a]2[bc]"
3 -> curNum = 3
[ -> [3, ''] curNum = 0, curString = ''
a -> curString = 'a'
] -> [] curString = '' + 'a' * 3
2 -> curNum = 2
[ -> [2, 'aaa'] curNum = 0, curString = ''
bc-> [2, 'aaa'] curString = bc
] -> [] curString = aaa + bc*2
curString = aaabcbc

s = "3[a2[c]]"
3 -> curNum = 3
[ -> [3, ''] curNum = 0, curString = ''
a -> curString = 'a'
2 -> curNum = 2
[ -> [3,'', 2, 'a'] curNum = 0, curString = ''
c -> curString = 'c'
] -> [3, ''] curString = a + 'c' * 2
] -> [] curString = '' + acc * 3
curString = accaccacc
*/