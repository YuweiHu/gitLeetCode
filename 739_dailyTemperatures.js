var dailyTemperatures = function (T) {
    var result = [];
    for (i = 0; i < T.length; i++) {
        for (j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                result[i] = j - i;
                break;
            } else if (j == T.length - 1) {
                result[i] = 0;
            }
        }
    }
    // 最後一項一定是零（不可能升溫）
    return result.concat(0);
};