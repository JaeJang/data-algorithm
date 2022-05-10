/**
 * @param {string} s
 * @return {number}
 */
 var countSubstringsV2 = function(s) {

    let result = 0;
    
    const expandFromMiddle = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            ++result;
            --l; ++r;
        }
    }
    
    for (let i = 0; i < s.length; ++i) {
        expandFromMiddle(i, i);
        if (i < s.length - 1) {
            expandFromMiddle(i, i + 1);
        }
    }
    
    return result;
};

 var countSubstrings = function(s) {

    const isPalindrome = (l, r) => {
        while(l <= r) {
            if (s[l] !== s[r]) return false;
            ++l; --r;
        }
        return true;
    }
    
    let result = 0;
    
    for (let i = 1; i <= s.length; ++i) {
        for (let j = 0; j <= s.length - i; ++j) {
            if (isPalindrome(j, i + j - 1)) {
                ++result;
            }
        }    
    }
    return result;
};