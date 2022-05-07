/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusionV2 = function(s1, s2) {
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
                      'r','s','t','u','v','w','x','y','z'];
    
    const s1Map = {}
    const s2Map = {}
    
    for (let alphabet of alphabets) {
        s1Map[alphabet] = 0; s2Map[alphabet] = 0;
    }
    
    for (let i = 0; i < s1.length; ++i) {
        ++s1Map[s1[i]];
        ++s2Map[s2[i]];
    }

    let matches = 0;
    
    for (let alphabet of alphabets) {
        matches += (s1Map[alphabet] === s2Map[alphabet] ? 1 : 0);
    }

    for (let i = s1.length; i < s2.length; ++i) {
        if (matches === 26) return true;
        
        --s2Map[s2[i-s1.length]];
        if (s1Map[s2[i-s1.length]] - 1 === s2Map[s2[i-s1.length]]) --matches;
        else if (s1Map[s2[i-s1.length]] === s2Map[s2[i-s1.length]]) ++matches;
        
        ++s2Map[s2[i]];
        if (s1Map[s2[i]] + 1 === s2Map[s2[i]]) --matches;
        else if (s1Map[s2[i]] === s2Map[s2[i]]) ++matches;
    }
    
    return matches === 26;
    
};


 var checkInclusion = function(s1, s2) {
    const s1Map = {}
    const s2Map = {}
    for (let c of s1) {
        s1Map[c] = s1Map[c] + 1 || 1;
    }
    
    for (let i = 0; i < s1.length - 1; ++i) {
        s2Map[s2[i]] = s2Map[s2[i]] + 1 || 1;
    }
    
    for (let i = s1.length - 1; i < s2.length; ++i) {
        if (i - s1.length >= 0) {
            s2Map[s2[i - s1.length]] -= 1;
        }
        s2Map[s2[i]] = s2Map[s2[i]] + 1 || 1;
        if (test(s1Map, s2Map)) return true;
    }
    return false;
    
};

function test(s1Map, s2Map){
    for (let [char, count] of Object.entries(s1Map)) {
        if (!s2Map[char] || s2Map[char] !== count) return false;
    }
    return true;
}