var climbStairs = function (n) {

    var factorial = (m) => {
        let result = 1;
        for (let i = 1; i <= m; i++) {
            result = result * i;
        }
        return result;
    }
    var count = 0;
    var arr = [];
    for (i = 0; i <= n; i++) {
        for (j = 0; j <= n; j++) {
            if (i * 1 + j * 2 == n) {
                //排列組合公式
                count = count + factorial(i + j) / factorial(i) / factorial(j);
                // arr = arr.concat([i],[j]);
            }
        }
    }
    return count;
};