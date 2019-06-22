var containsDuplicate = function (nums) {
    var temp = [];
    for (var i in nums) {
        //如果temp裡面找不到nums[i],將它加入temp
        if (temp.indexOf(nums[i]) < 0) {
            temp.push(nums[i]);
        }
    }
    if (temp.length == nums.length) {
        return false;
    } else {
        return true;
    }
};