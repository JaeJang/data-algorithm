/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const pMap = {}
    const sMap = {}
    const result = [];
    
    for (let c of p) {
        pMap[c] = pMap[c] + 1 || 1;
    }
    
    let j = 0;
    for (; j < p.length - 1; ++j) {
        sMap[s[j]] = sMap[s[j]] + 1 || 1;
    }
    for (let i = 0; j < s.length; ++j, ++i) {
        sMap[s[j]] = sMap[s[j]] + 1 || 1;
        if (test(sMap, pMap)) {
            result.push(i);
        }
        if (sMap[s[i]] === 1) delete sMap[s[i]];
        else --sMap[s[i]];
    }
    return result;
    
};

function test(sMap, pMap) {
    if (Object.keys(sMap).length !== Object.keys(pMap).length)
        return false;
    for (let p in pMap) {
        if (!sMap[p] || sMap[p] !== pMap[p])
            return false;
    }
    return true;
}