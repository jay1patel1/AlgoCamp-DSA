var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else {
            count = 0;
            maxCount = Math.max (count,maxCount);
        }
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))