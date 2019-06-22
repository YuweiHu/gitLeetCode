var generate = function (numRows) {
    var result = [];
    if (numRows == 0) {
    } else if (numRows == 1) {
        result[0] = [1];
    } else if (numRows == 2) {
        result[0] = [1];
        result[1] = [1, 1];
    } else {
        result[0] = [1];
        result[1] = [1, 1];

        for (i = 2; i < numRows; i++) {
            var temp = [1];
            for (j = 1; j < i; j++) {
                temp[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
            temp.push(1);
            result[i] = temp;
        }
    }
    return result;
};