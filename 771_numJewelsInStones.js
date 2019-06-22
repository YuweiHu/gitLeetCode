var numJewelsInStones = function (J, S) {
    var count = 0;
    for (i = 0; i < J.length; i++) {
        for (j = 0; j < S.length; j++) {
            if (S[j] == J[i]) {
                count++;
            }
        }
    }
    return count;
};