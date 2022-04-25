/**
   * @param rooms: m x n 2D grid
   * @return: nothing
   */
 function wallsAndGates(rooms) {
    // write your code here
    const queue = [];

    for (let i = 0; i< rooms.length; ++i) {
        for (let j = 0; j < rooms[i].length; ++j) {
            if (rooms[i][j] === 0) {
                queue.push([i,j]);
            }
        }
    }
    const visit = (r, c, distance) => {
        if (r < 0 || c < 0 
            || r === rooms.length || c === rooms[0].length
            || rooms[r][c] !== Infinity)
            return;
        rooms[r][c] = distance;
        queue.push([r,c]);
    }
    let distance = 1;
    while (queue.length) {
        const qLen = queue.length;
        for (let i = 0; i < qLen; ++i) {
            const [r, c] = queue.shift();
            visit(r + 1, c, distance);
            visit(r, c + 1, distance);
            visit(r - 1, c, distance);
            visit(r, c - 1, distance);
        }
        ++distance;
    }
  }

const rooms = [[Infinity,-1,0,Infinity],[Infinity,Infinity,Infinity,-1],[Infinity,-1,Infinity,-1],[0,-1,Infinity,Infinity]];
wallsAndGates(rooms);
console.log(rooms);