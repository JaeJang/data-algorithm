/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
 var robotSim = function(commands, obstacles) {
    const obsSet = new Set();
    
    for (let i = 0; i < obstacles.length; ++i) {
        const [x, y] = obstacles[i];
        obsSet.add(`${x},${y}`);
    }
    
    const directions = [[0,1], [1,0], [0,-1],[-1,0]];
    
    let curDir = 0;
    let curPos = [0,0];
    let maxD = 0;
    for (let command of commands) {
        if (command === -1) {
            curDir = (curDir + 1) % 4;
            continue;
        } else if (command === -2) {
            curDir = (curDir + 3) % 4;
            continue;
        }
        
        const target = [
            curPos[0] + directions[curDir][0] * command,
            curPos[1] + directions[curDir][1] * command
        ];

        while(curPos[0] !== target[0] || curPos[1] !== target[1]) {
            const newXPos = curPos[0] + directions[curDir][0]
            const newYPos = curPos[1] + directions[curDir][1];
            if (obsSet.has(`${newXPos},${newYPos}`)) break;
            curPos[0] = newXPos;
            curPos[1] = newYPos;
        }
        maxD = Math.max(maxD, curPos[0] * curPos[0] + curPos[1] * curPos[1]);
    }
    return maxD;
};