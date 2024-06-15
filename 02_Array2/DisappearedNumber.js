var findDisappearedNumbers = function(nums) {
    let arr = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]-1]++;
    }

    let ansArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            ansArr.push(i+1);
        }
    }

    return ansArr;
};

let findDisappearedNumbers2 = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] *= (- 1);
        }
    }

    let ansArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ansArr.push(i+1);
        }
    }

    return ansArr;
};

console.log(findDisappearedNumbers2([4,3,2,7,8,2,3,1]))