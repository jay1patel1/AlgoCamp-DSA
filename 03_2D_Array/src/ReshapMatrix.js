const matrixReshape = function(mat, r, c) {
    if ((mat.length*mat[0].length) != (r*c)) {
        return mat;
    } else {
        const ansArray = [];

        for (let i = 0; i < r; i++) {
            ansArray.push(Array(c).fill(0));
        }

        return ansArray;
    }
};

console.log(matrixReshape([[1,2],[3,4]],1,4))
console.log(matrixReshape([[1,2],[3,4]],2,4))