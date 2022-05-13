/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    const stack = [];
    
    let curNum =''
    for (let i = 0; i < s.length; ++i) {
        if (!isNaN(s[i])) {
            curNum += s[i];
        } else if (s[i] === '+') {
            stack.push(parseInt(curNum));
            curNum = '';
        } else if (s[i] === '-') {
            stack.push(parseInt(curNum));
            curNum = '-';
        } else if (s[i] === '*') {
            let nextNum = ''
            while(i + 1 < s.length && !isNaN(s[i + 1])) {
                nextNum += s[++i];
            }
            const newValue = parseInt(curNum) * parseInt(nextNum);
            curNum = `${newValue}`;
        } else if (s[i] === '/') {
            let nextNum = ''
            while(i + 1 < s.length && !isNaN(s[i + 1])) {
                nextNum += s[++i];
            }
            const newValue = parseInt(parseInt(curNum) / parseInt(nextNum));
            curNum = `${newValue}`;
        }
    }
    stack.push(parseInt(curNum));

    let result = 0;
    while (stack.length) {
        result += stack.pop();
    }
    
    return result;
};