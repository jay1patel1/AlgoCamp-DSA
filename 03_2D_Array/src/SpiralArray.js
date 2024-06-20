let spiralOrder = function(matrix) {
    let rStart = 0;
    let rEnd = matrix.length-1;
    let cStart = 0;
    let cEnd = matrix[0].length-1;
    let ansArray = [];

    while((rStart <= rEnd) && (cStart <= cEnd)) {

        for(let i = cStart; i <= cEnd; i++) {
            ansArray.push(matrix[rStart][i])
        }
        rStart++;

        for(let i = rStart; i <= rEnd; i++) {
            ansArray.push(matrix[i][cEnd])
        }
        cEnd--;

        if (rStart <= rEnd) {
            for(let i = cEnd; i >= cStart; i--) {
                ansArray.push(matrix[rEnd][i])
            }
        }
        rEnd--;

        if (cStart <= cEnd) {
            for (let i = rEnd; i >= rStart; i--) {
                ansArray.push(matrix[i][cStart])
            }
        }
        cStart++;
    }

    return ansArray;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));