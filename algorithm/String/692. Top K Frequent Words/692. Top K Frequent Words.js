/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const map = {};
    
    for (let word of words) {
        map[word] = map[word] + 1 || 1;
    }
    
    const entries = Object.entries(map);
    
    const bucket = Array.from({length: entries.length + 1}, () => []);
    
    entries.map(([word,count]) => {
        bucket[count].push(word);
    })
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && k > 0; --i) {
        if (bucket[i].length) {
            bucket[i].sort((l,r) => l.localeCompare(r));
            result.push(...bucket[i]);
            k -= bucket[i].length;
        }
    }

    if (k < 0) {
        result.splice(result.length + k, Math.abs(k));
    }
    
    return result;
};

 var topKFrequent = function(words, k) {
    const map = {};
    
    for (let word of words) {
        map[word] = map[word] + 1 || 1;
    }
    
    const entries = Object.entries(map);
    
    entries.sort((l, r) => r[1] - l[1] || l[0].localeCompare(r[0]));
    
    const result = [];
    for (let i = 0; i < k; ++i) {
        result.push(entries[i][0]);
    }
    return result;
};