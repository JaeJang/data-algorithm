/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const operators = {
        '+': add,
        '-': substract,
        '*': multiply,
        '/': divide
    } 
    const stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseInt(token));
            continue;
        }
        const y = stack.pop();
        const x = stack.pop();
        stack.push(operators[token](x, y))
    }
    return stack.pop();
};

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return parseInt(x / y);
}