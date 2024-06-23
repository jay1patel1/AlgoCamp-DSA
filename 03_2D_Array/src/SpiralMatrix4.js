const spiralMatrix = function(m, n, head) {
    let ansArray = Array(m);
    let count = 0;
    let maxCount = m*n;

    for (let i = 0; i < ansArray.length; i++) {
        ansArray[i] = Array(n).fill(-1);
    }

    let cStart = 0;
    let rStart = 0;
    let cEnd = ansArray[0].length-1;
    let rEnd = ansArray.length-1;

    while (count < maxCount && count < head.length) {
        for (let i = cStart; i <= cEnd; i++) {
            if (count < head.length) {
                ansArray[rStart][i] = head[count];
                count++;
            }
        }
        rStart++;

        if (!(count < maxCount && count < head.length)) break;

        for (let i = rStart; i <= rEnd; i++) {
            if (count < head.length) {
                ansArray[i][cEnd] = head[count];
                count++;
            }
        }
        cEnd--;

        if (!(count < maxCount && count < head.length)) break;

        for (let i = cEnd; i >= cStart; i--) {
            if (count < head.length) {
                ansArray[rEnd][i] = head[count];
                count++;
            }
        }
        rEnd--;

        if (!(count < maxCount && count < head.length)) break;

        for (let i = rEnd; i >= rStart; i--) {
            if (count < head.length) {
                ansArray[i][cStart] = head[count];
                count++;
            }
        }
        cStart++;
    }

    return ansArray;
};

console.log(spiralMatrix(3,5,[3,0,2,6,8,1,7,9,4,2,5,5,0]));
console.log(spiralMatrix(1,4,[0,1,2]));