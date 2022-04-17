/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabelsV2 = function(s) {
    const res = [];
    let end = 0;
    let start = 0;
    const lastSeen = {};
    
    for (let i = 0; i < s.length; ++i) {
        lastSeen[s[i]] = i;
    }
    
    for (let i = 0; i < s.length; ++i) {
        end = Math.max(lastSeen[s[i]], end);
        if (end === i) {
            res.push(end - start + 1);
            start = i + 1;
            end = i + 1;
        }
    }
    return res;
};

 var partitionLabels = function(s) {
    const res = [];
    let end = 0;
    let start = 0;
    const seen = new Set();
    for (let i = 0; i < s.length; ++i) {
        if (!seen.has(s[i])) {
            for (let j = end + 1; j < s.length; ++j) {
                if (s[j] === s[i]) end = j;
            }    
        }
        seen.add(s[i]);
        if (end === i) {
            res.push(end - start + 1);
            end = i + 1;
            start = i + 1;
        }
    }
    return res;
};