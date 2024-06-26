/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
    let turn = 0;
    let arr = Array(9).fill(-1);

    for (let i = 0; i < moves.length; i++) {
        let x = moves[i][0];
        let y = moves[i][1];

        if (i%2 === 0) {
            arr[(x*3) + y] = "X";
        } else {
            arr[(x*3) + y] = "0";
        }
    }

    return winnerAlgo(arr);
};

function winnerAlgo (grid) {

}

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]))
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]))
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]))
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1]]))