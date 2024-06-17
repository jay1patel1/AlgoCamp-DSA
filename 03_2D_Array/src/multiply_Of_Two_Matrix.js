function multiply_Of_Two_Matrix (arr1,arr2) {
    function matrixSum (arr1,arr2,i,j) {
        let sum = 0;

        for (let k = 0; k < arr1.length; k++) {
            sum = arr1
        }
    }


    const m = arr1.length;
    const n = arr1[0].length;

    const ansArray = Array(Math.max(m,n)).fill(Array(Math.max(m,n)).fill(0));

    for (let i = 0; i < ansArray.length; i++) {
        for (let j = 0; j < ansArray[0].length; j++) {
            ansArray[m][n] = matrixSum(arr1,arr2,i);
        }
    }
}

multiply_Of_Two_Matrix([[1,1],[2,2],[3,3]],[[1,1,1],[2,2,2]])