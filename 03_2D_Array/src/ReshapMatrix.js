const matrixReshape = function(mat, r, c) {
    if ((mat.length*mat[0].length) != (r*c)) {
        return mat;
    } else {
        const ansArray = [];

        for (let i = 0; i < r; i++) {
            ansArray.push(Array(c).fill(0));
        }

        let currentRow = 0;
        let currentCol = 0;

        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                ansArray[currentRow][currentCol] = mat[i][j];
                currentCol++;
                if (currentCol > (c-1)) {
                    currentRow++;
                    currentCol = 0;
                    // if (currentRow >= (r-1)) {
                    //     return ansArray;
                    // }
                }
            }
        }

        return ansArray;
    }
};

console.log(matrixReshape([[1,2],[3,4]],1,4))
console.log(matrixReshape([[1,2],[3,4]],2,4))
console.log(matrixReshape([[1,2],[3,4]],4,1))