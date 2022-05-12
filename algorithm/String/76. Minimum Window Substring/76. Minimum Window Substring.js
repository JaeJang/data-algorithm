/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if (t.length > s.length) return "";
    
    const sMap = {};
    const tMap = {};
    
    for (let c of t) {
        tMap[c] = tMap[c] + 1 || 1;
        sMap[c] = 0;
    }
    
    let match = 0;
    let need = Object.keys(tMap).length;
    let minLen = Infinity;
    let minRange = [0,0];
    let start = 0;
    for (let i = 0; i < s.length; ++i) {
        if (!tMap[s[i]]) continue;
        
        ++sMap[s[i]];
        if (sMap[s[i]] === tMap[s[i]]) {
            ++match;
        }
        while (match === need) {
            if (i - start + 1 < minLen) {
                minLen = i - start + 1;
                minRange = [start, i+1];
            }
            if (tMap[s[start]]) {
                --sMap[s[start]];
                if (sMap[s[start]] < tMap[s[start]]) {
                    --match;
                }
            }
            ++start;
        }
    }
    return s.substring(minRange[0], minRange[1]);
    
};