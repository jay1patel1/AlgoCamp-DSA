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

    let headVal = [];
    let li = head
    while (li != null) {
        headVal.push(li.val)
        li = li.next;
    }

    while (count < maxCount && count < headVal.length) {
        for (let i = cStart; i <= cEnd; i++) {
            if (count < headVal.length) {
                ansArray[rStart][i] = headVal[count];
                count++;
            }
        }
        rStart++;

        if (!(count < maxCount && count < headVal.length)) break;

        for (let i = rStart; i <= rEnd; i++) {
            if (count < headVal.length) {
                ansArray[i][cEnd] = headVal[count];
                count++;
            }
        }
        cEnd--;

        if (!(count < maxCount && count < headVal.length)) break;

        for (let i = cEnd; i >= cStart; i--) {
            if (count < headVal.length) {
                ansArray[rEnd][i] = headVal[count];
                count++;
            }
        }
        rEnd--;

        if (!(count < maxCount && count < headVal.length)) break;

        for (let i = rEnd; i >= rStart; i--) {
            if (count < headVal.length) {
                ansArray[i][cStart] = headVal[count];
                count++;
            }
        }
        cStart++;
    }

    return ansArray;
};