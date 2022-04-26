/**
 * @param {string} s
 * @return {boolean}
 */
 var checkStringV2 = function(s) {

    for (let i = 1; i < s.length; ++i) {
        if (s[i-1] > s[i]) return false;   
    }
    
    return true;
};

 var checkString = function(s) {
    let noAMore = s[0] === 'b' ? true : false;
    for (let i = 1; i < s.length; ++i) {
        if (s[i] === 'a') {
            if (noAMore) return false;
        }
        if (s[i] === 'b') {
            noAMore = true;
        }
        
    }
    
    return true;
};