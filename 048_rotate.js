// 52ms >91.68%
var rotate = function(matrix) {
    function swap(matrix, i, j) {
        var a = matrix[i][j];
        var b = matrix[j][i];
        matrix[i][j] = b;
        matrix[j][i] = a;
        return matrix;
    }
    for (i = 0; i < matrix.length; i++) {
        for (j = i + 1; j < matrix.length; j++) {
            swap(matrix, i, j);
        }
    }
    for (k = 0; k < matrix.length; k++) {
        matrix[k].reverse();
    }
};