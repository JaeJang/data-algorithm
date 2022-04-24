/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const map = {};
    
    for (let c of s) {
        map[c] = map[c] + 1 || 1;
    }
    
    for (let c of t) {
        if (!map[c]) return false;
        if (--map[c] === 0) delete map[c];
        else if (map[c] <= 0) return false;
    }
    
    return Object.keys(map).length === 0;
};