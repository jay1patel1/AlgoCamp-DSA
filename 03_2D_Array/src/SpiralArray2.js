const generateMatrix = function(n) {
    let ansArray = Array(n);
    for (const key in ansArray) {
        ansArray[key] = Array(n).fill(0);
    }

    let count = 1;

    let cStart = 0;
    let rStart = 0;
    let rEnd = ansArray.length-1;
    let cEnd = ansArray[0].length-1;

    while (count <= n*n) {
        for (let i = cStart; i <= cEnd ; i++) {
            ansArray[rStart][i] = count;
            count++;
        }
        rStart++;

        if (!(count <= n*n)) {
            break;
        }
        
        for (let i = rStart; i <= rEnd ; i++) {
            ansArray[i][cEnd] = count;
            count++;
        }
        cEnd--;

        if (!(count <= n*n)) {
            break;
        }

        for (let i = cEnd; i >= cStart ; i--) {
            ansArray[rEnd][i] = count;
            count++;
        }
        rEnd--;
        
        if (!(count <= n*n)) {
            break;
        }

        for (let i = rEnd; i >= rStart ; i--) {
            ansArray[i][cStart] = count;
            count++;
        }
        cStart++;
    }

    console.log(ansArray);
    return ansArray;
};

generateMatrix(3)