const transpose = function(matrix) {
    const ansArray = Array(matrix[0].length);

    for (let i = 0; i < ansArray.length; i++) {
        let temp = Array(matrix.length).fill(0);
        ansArray[i] = temp;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            ansArray[j][i] = temp;
        }
    }

    return ansArray;
};

transpose([[1,2,3],[4,5,6],[7,8,9]]);
transpose([[1,2,3],[4,5,6]]);