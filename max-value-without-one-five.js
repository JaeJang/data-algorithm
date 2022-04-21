function find(n) {
    let max = -Infinity;
    let cur = 0;
    let numOfDigit = 0;
    while (Math.abs(n) > 0) {
        let remainder = n % 10;
        n = parseInt(n / 10);
        const offset = Math.pow(10,numOfDigit);
        if (Math.abs(remainder) === 5) {
            max = Math.max(max, n * offset + cur);

        }
        cur = remainder * offset + cur;
        ++numOfDigit;
    }
    return max;
}

console.log(find(-5859));
console.log(find(150958));
console.log(find(1598));