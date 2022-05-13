/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// Using Adjacent lists for patterns
 var ladderLength = function(beginWord, endWord, wordList) {
    let result = 1;
    
    const adj = {};
     
     wordList.push(beginWord);
     
     for (let word of wordList) {
         for (let i = 0; i < word.length; ++i) {
             const pattern = word.substring(0,i) + '*' + word.substring(i+1);
             if (!adj[pattern]) adj[pattern] = [];
             adj[pattern].push(word);
         }
     }

     const queue = [beginWord];
     const visit = new Set();
     visit.add(beginWord);
     while (queue.length) {
         const qLen = queue.length;
         for (let i = 0; i < qLen; ++i) {
             const cur = queue.shift();
             for (let j = 0; j < cur.length; ++j) {
                 const pattern = cur.substring(0,j) + '*' + cur.substring(j+1);
                 for (let adjWord of adj[pattern]) {
                     if (visit.has(adjWord)) continue;
                     visit.add(adjWord);
                     if (adjWord === endWord) return ++result;
                     queue.push(adjWord);
                 }
             }
         }
         ++result;
     }
    return 0;
};
/*
beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
{
  '*ot': [ 'hot', 'dot', 'lot' ],
  'h*t': [ 'hot', 'hit' ],
  'ho*': [ 'hot' ],
  'd*t': [ 'dot' ],
  'do*': [ 'dot', 'dog' ],
  '*og': [ 'dog', 'log', 'cog' ],
  'd*g': [ 'dog' ],
  'l*t': [ 'lot' ],
  'lo*': [ 'lot', 'log' ],
  'l*g': [ 'log' ],
  'c*g': [ 'cog' ],
  'co*': [ 'cog' ],
  '*it': [ 'hit' ],
  'hi*': [ 'hit' ]
}

*/

 var ladderLength = function(beginWord, endWord, wordList) {
    let result = 1;
    
    let queue = [beginWord];
    
    while(queue.length) {
        const qLen = queue.length;
        
        for (let i = 0; i < qLen; ++i) {
            const cur = queue.shift();
            let j = 0;
            while (j < wordList.length) {
                let diff = 0;
                for (let z = 0; z < cur.length; ++z) {
                    if (cur[z] !== wordList[j][z]) ++diff;
                }
                if (diff === 1) {
                    if (wordList[j] === endWord) return ++result;
                    queue.push(wordList[j]);
                    wordList.splice(j, 1);
                } else {
                    ++j;
                }
            }
        }
        ++result;
    }
    
    return 0;
};