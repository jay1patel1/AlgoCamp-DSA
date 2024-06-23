const spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let ansArr = [];
    const maxCount = rows * cols;

    let rEnd = rStart + 1;
    let cEnd = cStart + 1;
    let cPosition = {
        col: cStart,
        row: rStart
    };

    while (ansArr.length < maxCount) {
    //     Go left to right
        for (let i = cPosition.col; i <= cEnd; i++) {
            if ((i >= 0 && i < cols) && (cPosition.row < rows && cPosition.row > -1)) {
                ansArr.push([cPosition.row,i]);
            }
            cPosition.col = i;
        }
        cPosition.row++;
        cStart--;

        if(ansArr.length >= maxCount) {
            break;
        }
    //     Go top to bottom
        for (let i = cPosition.row; i <= rEnd; i++) {
            if ((i >= 0 && i < rows) && (cPosition.col < cols && cPosition.col > -1)) {
                ansArr.push([i,cPosition.col]);
            }
            cPosition.row = i;
        }
        cPosition.col--;
        rStart--;

        if(ansArr.length >= maxCount) {
            break;
        }
    //     Go right to left
        for (let i = cPosition.col; i >= cStart; i--) {
            if ((i >= 0 && i < cols) && (cPosition.row < rows && cPosition.row > -1)) {
                ansArr.push([cPosition.row,i]);
            }
            cPosition.col = i;
        }
        cPosition.row--;
        rEnd++;

        if(ansArr.length >= maxCount) {
            break;
        }
    //     Go bottom to top
        for (let i = cPosition.row; i >= rStart; i--) {
            if ((i >= 0 && i < rows) && (cPosition.col < cols && cPosition.col > -1)) {
                ansArr.push([i,cPosition.col]);
            }
            cPosition.row = i;
        }
        cPosition.col++;
        cEnd++;
    }

    console.log(ansArr)
};

spiralMatrixIII(1,4,0,0);
spiralMatrixIII(5,6,1,4);
