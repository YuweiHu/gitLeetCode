var isMonotonic = function (A) {
    var count1 = 0;
    var count2 = 0;
    for (i = 0; i < A.length - 1; i++) {
        if (A[i] > A[i + 1]) {
            count1++;
        } else if (A[i] < A[i + 1]) {
            count2++;
        } else {
            count1++;
            count2++;
        }
    }
    if (count1 == A.length - 1 || count2 == A.length - 1) {
        return true;
    } else {
        return false;
    }
};