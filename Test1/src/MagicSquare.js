function formingMagicSquare(s) {
    // Write your code here
    const magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];

    let actualCost = Number.MAX_SAFE_INTEGER;

    for (let i=0; i < magicSquares.length; i++) {

        let currentCost = 0;

        for (let j = 0; j < magicSquares[i].length; j++) {
            for(let k = 0; k < magicSquares[i][j].length; k++) {
                let crc = (s[j][k]);
                let magc = magicSquares[i][j][k];
                currentCost += Math.abs(crc-magc);
            }
        }

        if (currentCost < actualCost) {
            actualCost = currentCost;
        }
    }

    return actualCost;
}

console.log(formingMagicSquare([[4,8,2], [4,5,7], [6,1,6]]))