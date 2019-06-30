var isPowerOfTwo = function (n) {
    var i = 0;
    while (Math.pow(2, i) <= n) {
        if (Math.pow(2, i) == n) {
            return true;
        } else {
            i++;
        }
    }
    return false;
};