var intersect = function(nums1, nums2) {
    var result = [];

    if (nums1.length >= nums2.length) {
        var long = nums1;
        var short = nums2;
    } else {
        var long = nums2;
        var short = nums1;
    }

    for (i = 0; i < short.length; i++) {
        if (long.indexOf(short[i]) >= 0) {
            long[long.indexOf(short[i])] = null;
            result.push(short[i]);
        }
    }
    return result;
};