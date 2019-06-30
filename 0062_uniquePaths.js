var uniquePaths = function (m, n) {

    var factorial = (n) => {
        var result = 1;
        for (i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    return factorial(m + n - 2) / factorial(m - 1) / factorial(n - 1);
};