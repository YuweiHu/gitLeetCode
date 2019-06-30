// 52ms >86.30%
var rob = function(nums) {
    if (nums.length == 0) {
        return 0;
    } else if (nums.length == 1) {
        return nums[0];
    } else if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }
    var max = [nums[0], Math.max(nums[0], nums[1])];
    for (i = 2; i < nums.length; i++) {
        max.push(Math.max(nums[i] + max[i - 2], max[i - 1]));
    }
    return max.pop();
};