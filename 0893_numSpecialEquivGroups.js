// 92ms >39.29%
var numSpecialEquivGroups = function(A) {
    //將 A 之每個元素分離奇偶並重新寫入 A
    for (i = 0; i < A.length; i++) {
        var even = '';
        var odd = '';
        for (j = 0; j < A[i].length; j++) {
            if (j % 2 == 0) {
                even += A[i][j];
            } else {
                odd += A[i][j];
            }
        }
        A[i] = even.split('').sort().join('') + odd.split('').sort().join('');
    }
    //查找是否有一樣的元素
    var temp = [];
    for (k = 0; k < A.length; k++) {
        if (temp.indexOf(A[k]) < 0) {
            temp.push(A[k]);
        }
    }
    return temp.length
};