var tribonacci = function(n) {
    var re = [0, 1, 1];
    if (n < 3) {
        return re[n];
    } else {
        for (var i = 3; i <= n; i++) {
            re[i] = re[i - 1] + re[i - 2] + re[i - 3];
        }
        return re.pop();
    }
};