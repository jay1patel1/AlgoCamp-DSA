/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ansArr = [];
    nums.sort((a,b) => a - b);
    let target = 0;

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let start = i+1;
        let end = nums.length - 1;

        while (start < end) {
            let sum = nums[start] + nums[end] + nums[i];

            if (sum < target) {
                start++;
            } else if (sum > target) {
                end --;
            } else {
                ansArr.push([nums[start],nums[end],nums[i]]);


                while (start < end && nums[start] === nums[start-1]) {
                    start++;
                }
                if (start < end && nums[end] === nums[end+1]) {
                    end--;
                }

                start++;
                end--;
            }
        }
    }

    return ansArr;
};