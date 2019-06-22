var moveZeroes = function (nums) {
    var count = 0;
    for (j = 0; j < nums.length; j++) {
        if (nums[j] == 0) {
            count++;
        }
    }
    var i = 0;
    while (i < nums.length-count) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
        } else {
            i++;
        }
    }
    return nums;
};