var missingNumber = function (nums) {
    nums.sort((a, b) => { return a - b });
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums.length;
};