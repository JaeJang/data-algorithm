/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    const result = [];
    const current = [];
    
    const helper = (i) => {
        if (i === s.length) {
            result.push(current.slice());
            return;
        }
        
        for (let j = i; j < s.length; ++j) {
            if (isPalindrome(s, i, j)) {
                current.push(s.substring(i, j + 1));
                helper(j + 1);
                current.pop();    
            }
        }
    }
    
    helper(0);
    return result;
};

function isPalindrome(s, i, j) {
    while (i <= j) {
        if (s[i] !== s[j]) return false;
        ++i; --j;
    }
    return true;
}


    


/*
aabacca
*/