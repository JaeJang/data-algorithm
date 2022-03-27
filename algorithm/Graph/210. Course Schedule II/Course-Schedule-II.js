/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    const inComing = Array.from({length:numCourses}, () => []);
    const outGoing = Array.from({length:numCourses}, () => []);
    
    for (let prerequisite of prerequisites) {
        inComing[prerequisite[0]].push(prerequisite[1]);
        outGoing[prerequisite[1]].push(prerequisite[0]);
    }
    
    const canTake = [];
    for (let i = 0; i < numCourses; ++i) {
        if (!inComing[i].length) canTake.push(i);
    }
    const taken = [];
    while (canTake.length) {
        const course = canTake.pop();
        taken.push(course);
        for (let next of outGoing[course]) {
            inComing[next].splice(inComing[next].indexOf(course), 1);
            if (!inComing[next].length) canTake.push(next);
        }
    }
    return taken.length === numCourses ? taken : [];
};