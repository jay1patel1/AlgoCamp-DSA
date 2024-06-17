function printIn_2D_Array (row,col){
    let ans = Array(row);
    let num = 0;
    for (let i = 0; i < row ; i++) {
        let addArray = Array(col);
        for (let j = 0; j < col; j++) {
            num++;
            addArray[j] = num;
        }
        ans[i] = addArray;
    }

    console.log(ans);
    return ans;
}

function wave_Grid(row,col) {
    let ans = Array(row);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = Array(col);
    }

    let num = 0;

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            num++;
            ans[j][i] = num;
        }
    }

    console.log(ans);
    return ans;
}

printIn_2D_Array(3,2);
wave_Grid(3,2);