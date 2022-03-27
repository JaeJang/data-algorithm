/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// https://www.youtube.com/watch?v=n1DivAcQ5Dw&ab_channel=PotatoCoders
 var canFinish = function(numCourses, prerequisites) {
    const inComing = {}
    const outGoing = {}
    
    for (let i = 0; i < numCourses; ++i) {
        inComing[i] = [];
        outGoing[i] = [];
    }
    
    for (let prerequisite of  prerequisites) {
        const course = prerequisite[1];
        const pre = prerequisite[0];
        inComing[course].push(pre);
        outGoing[pre].push(course);
    }
    
    const canTake = [];
    for (let i = 0; i < numCourses; ++i) {
        if (!inComing[i].length) canTake.push(i);
    }
    
    let taken = 0;
    
    while (canTake.length) {
        const course = canTake.shift();
        ++taken;
        for (let next of outGoing[course]) {
            inComing[next].splice(inComing[next].indexOf(course),1);
            if (!inComing[next].length)
                canTake.push(next);
        }
    }
    
    return numCourses === taken;
};