/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    const maxPile = Math.max(...piles);
    
    let start = 1;
    let end = result = maxPile;
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        let hours = 0;
        for (let i = 0; i < piles.length; ++i) {
                hours += Math.ceil(piles[i] / mid);
                if (hours > h) break;
        }
        if (hours <= h) {
            end = mid - 1;
            result = Math.min(result, mid);
        }  else {
            start = mid + 1;
        }
    }
    
    return result;
};

/*
[3,6,7,11] h = 8
max possible k = 11
brute force = start from 1 to 11
if k = 1  hours = 27  > h
if k = 2 hours = 2 + 3 + 4 + 6 > h
if k = 3
if k = 4 hours = 8 === h

in worst case O(max(p)*n)


[1,2,3,4,5,6,7,8,9,10,11] - possible `k`s

mid = 6
[3,6,7,11]
hours = ceil(3/6) + ceil(6/6) + ceil(7/6) + ceil(11/6)
hours = 6 < h
could be smaller

mid = 3
hours = ceil(3/3) + ceil(6/3) + ceil(7/3) + ceil(11/3)
hours = 10 > h

mid = 4
hours = 8 === hours

O(log(max(p))*n)
*/