// 232ms >5.33%
var repeatedNTimes = function(A) {
    var temp = [];
    var result;
    A.map((element) => {
        if (temp.indexOf(element) < 0) {
            temp.push(element);
        } else {
            result = element;
        }
    });
    return result;
};
// 116ms >10.25%
var repeatedNTimes = function(A) {
    A.sort((a, b) => { return a - b });
    var result = 0;
    for (i = 0; i < A.length; i++) {
        if (A[i] == A[i + 1]) {
            result = A[i];
            break;
        }
    }
    return result;
};
// 56ms >96.80%
var repeatedNTimes = function(A) {
    //跑一半多一個迴圈即可,因有N+1個重複
    for (i = 0; i < A.length / 2 + 1; i++) {
        if (A.indexOf(A[i]) != A.lastIndexOf(A[i])) {
            return A[i];
        }
    }
};