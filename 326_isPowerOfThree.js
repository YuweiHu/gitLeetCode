var isPowerOfThree = function(n) {
    var i = 0;
    while (Math.pow(3, i) < n) {
        i++;
    }
    if (Math.pow(3, i) == n) {
        return true;
    } else {
        return false;
    }
};