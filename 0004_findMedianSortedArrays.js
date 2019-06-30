var findMedianSortedArrays = function (nums1, nums2) {
    var arr = nums1.concat(nums2);
    arr.sort((a, b) => {
        return a - b;
    })
    if (arr.length % 2 == 1) {
        return arr[(arr.length - 1) / 2];
    } else {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    }
};