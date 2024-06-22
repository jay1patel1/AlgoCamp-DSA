const spiralMatrixIII = function(rows, cols, rStart, cStart) {
    function addArray (arr,rPos,cPos) {
        rPos++;
        cPos++;
        arr.push([rPos,cPos])
    }

    let ansArray = [];
    let count = 1;
    let maxCount = cols*rows

    let rStartBoundary = 0;
    let cStartBoundary = 0;
    let rEndBoundary = rows-1;
    let cEndBoundary = cols-1;

    let movePosition_CP = rStart;
    let movePosition_Cn = rStart-1;
    let movePosition_RP = cStart-1;
    let movePosition_Rn = cStart - 1;

    let rPos = rStart-1;
    let cPos = cStart-1;


    while (count <= maxCount) {
        for (let i = cPos; i <= movePosition_CP; i++) {
            if (i > cEndBoundary) {
                break;
            } else {
                cPos = i
                addArray(ansArray,rPos,cPos);
                count++;
            }
        }
        movePosition_RP++;

        if (count > maxCount) {
            break;
        }

        for (let i = rPos; i <= movePosition_RP; i++) {
            if (i > rEndBoundary) {
                break;
            } else {
                rPos = i;
                addArray(ansArray,rPos,cPos);
                count++;
            }
        }
        movePosition_Cn--;

        if (count > maxCount) {
            break;
        }

        for (let i = cPos; i >= movePosition_Cn; i++) {
            if (i > rEndBoundary) {
                break;
            } else {
                addArray(ansArray,rPos,i);
                count++;

            }
        }
        movePosition_Rn--;

        for (let i = rPos; i >= movePosition_Cn; i++) {
            if (i > rEndBoundary) {
                break;
            } else {
                addArray(ansArray,rPos,i);
                count++;
            }
        }
    }


    while (count <= maxCount) {

    }
};

spiralMatrixIII(1,4,0,0);
spiralMatrixIII(5,5,1,4);
