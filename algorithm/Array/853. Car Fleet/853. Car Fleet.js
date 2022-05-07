/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 var carFleet = function(target, position, speed) {

    let arr = [];
    const sortedList = [];
    
    for (let i = 0; i < position.length; ++i) {
        sortedList.push([position[i], speed[i]]);
    }
    sortedList.sort((l, r) => r[0] - l[0]);
    
    for (let [pos, speed] of sortedList) {
        const timeToReach = (target - pos) / speed;
        if (!arr.length || arr[arr.length-1] < timeToReach) {
            arr.push(timeToReach);
        }
    }
    
    return arr.length
                   
};
/*
target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
[[10,2], [8,4], [5,1], [3,3], [0,1]]

[10,2]
(12 - 10) / 2 = 1 -> it takes 1 time to reach to the target
arr =[1]

[8,4]
(12 - 8) / 4 = 1 -> it takes 1 time to reach to the target
intersected with [10,2]
arr = [1]

[5,1]
(12 - 5) / 1 = 7 -> it takes 7 time to reach to the target
it takes more time then the last pushed time which is 1
which means no intersect
arr = [1,7]

[3,3]
(12 - 3) / 3 = 3 
when it goes its own speen, it reached to the target faster than 
the car which was positioned ahead
which means there will be intersection with [5,1]
arr = [1,7]

[0,1]
(12 - 0) / 1 = 12
arr=[1,7,12]

*/