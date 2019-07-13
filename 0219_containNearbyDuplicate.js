// 2832ms >5.81%
var containsNearbyDuplicate = function(nums, k) {
    var re = [];
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && j - i <= k) return true;
        }
    }
    return false
};