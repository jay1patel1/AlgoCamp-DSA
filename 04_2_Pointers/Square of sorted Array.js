/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length-1;
    let ans = Array(nums.length);
    let count = nums.length-1;

    while (start <= end) {
        const startP = nums[start]**2;
        const endP = nums[end]**2;

        if (startP > endP) {
            ans[count] = startP;
            start ++
            count--;
        } else {
            ans[count] = endP;
            end--;
            count--;
        }
    }

    return ans;
};