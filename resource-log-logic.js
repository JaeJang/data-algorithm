/*
Log {
    id: number,
    user: string,
    file: string,
    action: 'out' | 'in',
    time: number
}
*/

const logs = [
    {id: 1, user: "Jae", file: "f1", action: "out", time: 1},
    {id: 2, user: "Jae", file: "f1", action: "in", time: 10},
    {id: 3, user: "Bob", file: "f2", action: "out", time: 1},
    {id: 4, user: "Jae", file: "f3", action: "out", time: 1},
    {id: 5, user: "Chris", file: "f1", action: "out", time: 1},
    {id: 6, user: "Jae", file: "f3", action: "in", time: 20},
    {id: 7, user: "Bob", file: "f2", action: "in", time: 30},
    {id: 8, user: "Jae", file: "f2", action: "out", time: 1},
    {id: 9, user: "Jae", file: "f2", action: "in", time: 40},
    {id: 10, user: "Chris", file: "f1", action: "in", time: 100},
    {id: 11, user: "Jae", file: "f2", action: "out", time: 1},
    {id: 12, user: "Jae", file: "f2", action: "in", time: 40},
];

function fileUsedMost() {
    const outLogs = logs.filter(log => log.action === 'out');

    const fileMap = {}
    
    let keys = [];
    let max = -1;
    // we can finish it in one pass
    for (let log of outLogs) {
        fileMap[log.file] = fileMap[log.file] ? fileMap[log.file] + 1 : 1;
        if (max < fileMap[log.file]) {
            keys = [log.file];
            max = fileMap[log.file]
            
        } else if(max === fileMap[log.file]) {
            keys.push(log.file);
        }
    }
    return keys;
}
// f 1 -> {f1: 1} -> keys:[f1], max:1
// f 2 -> {f1: 1, f2:1} -> keys:[f1,f2], max:1
// f 3 -> {f1: 1, f2:1, f3:1} -> keys:[f1,f2,f3], max:1
// f 1 -> {f1: 2, f2:1, f3:1} -> keys:[f1], max:2
// f 2 -> {f1: 2, f2:2, f3:1} -> keys:[f1,f2], max:2
// f 2 -> {f1: 2, f2:3, f3:1} -> keys:[f2], max:3
console.log(fileUsedMost());

/*
mostUserUsed function has the same logic as fileUsedMost
*/

// Assumptions
// 1. If there is an out for a file, a corresponding in must be in place
// 2. No duplicated longest time. (if we allow, we can return a list of them)
// 3. Every pair of out-in should start with out
function longestUsedUser() {
    // {file: outTime}
    const outTimes = {}
    // {user: longestTimeForUser}
    const users = {}
    let longestTime = 0;
    let longestUser = null;
    let longestUsedFile = null;

    for (let log of logs) {
        if (log.action === 'out') {
            outTimes[log.file] = log.time;
        } else {
            const usedTime = log.time - outTimes[log.file];
            if(!users[log.user]) users[log.user] = usedTime;
            else users[log.user] = Math.max(usedTime, users[log.user]);
            
            if (longestTime < usedTime) {
                longestTime = usedTime;
                longestUser = log.user;
                longestUsedFile = log.file;
            }
        }
    }

    return {file: longestUsedFile, user: longestUser, time: longestTime};
}

console.log(longestUsedUser());
