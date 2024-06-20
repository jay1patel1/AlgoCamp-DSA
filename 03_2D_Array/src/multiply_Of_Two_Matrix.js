function multiply_Of_Two_Matrix (arr1,arr2) {
    function matrixSum (arr1,arr2,i,j) {
        let sum = 0;

        for (let k = 0; k < arr1[0].length; k++) {
            sum += (arr1[i][k])*(arr2[k][j]);
        }

        return sum;
    }


    const m = arr1.length;
    const n = arr1[0].length;

    const ansArray = Array(arr1.length);

    for (let i = 0; i < ansArray.length; i++) {
        ansArray[i] = Array(arr2[0].length);
    }

    for (let i = 0; i < ansArray.length; i++) {
        for (let j = 0; j < ansArray[0].length; j++) {
            ansArray[i][j] = matrixSum(arr1,arr2,i,j);
        }
    }

    console.log(ansArray);
}

multiply_Of_Two_Matrix([[1,1],[2,2]],[[1,1],[2,2]])
multiply_Of_Two_Matrix([[1,1],[2,2],[3,3]],[[1,1,1],[2,2,2]])
multiply_Of_Two_Matrix([[1,2],[3,4]],[[4,3],[2,1]])
multiply_Of_Two_Matrix([[3,4],[7,2],[5,9]],[[3,1,5],[6,9,7]])