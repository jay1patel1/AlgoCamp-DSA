/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
    let arr = Array(9).fill(-1);

    for (let i = 0; i < moves.length; i++) {
        let x = moves[i][0];
        let y = moves[i][1];

        if (i%2 === 0) {
            arr[(x*3) + y] = "X";
        } else {
            arr[(x*3) + y] = "O";
        }
    }

    let x = winnerAlgo(arr);

    if (x === "none") {
        if (moves.length < 9) {
            return "Pending"
        } else {
            return "Draw"
        }
    } else {
        return x;
    }
};

function winnerAlgo (grid) {
    if (grid[0] === grid[1] && grid[1] === grid[2]){
        return grid[0];
    } else if (grid[3] === grid[4] && grid[4] === grid[5]) {
        return grid[3];
    } else if (grid[6] === grid[7] && grid[7] === grid[8]) {
        return grid[6];
    } else if (grid[0] === grid[3] && grid[3] === grid[6]) {
        return grid[0];
    } else if (grid[1] === grid[4] && grid[4] === grid[7]) {
        return grid[1];
    } else if (grid[2] === grid[5] && grid[5] === grid[8]) {
        return grid[2];
    } else if (grid[0] === grid[4] && grid[4] === grid[8]) {
        return grid[0];
    } else if (grid[2] === grid[4] && grid[4] === grid[6]) {
        return grid[2];
    } else {
        return "none";
    }
}

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]))
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]))
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]))
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1]]))