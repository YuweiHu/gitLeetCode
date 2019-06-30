// 80ms >80.84%
var sortArrayByParity = function(A) {
    var odd = [];
    var even = [];
    for (i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }
    return even.concat(odd);
};