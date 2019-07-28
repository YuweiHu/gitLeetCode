// 88ms >48.03%
var diStringMatch = function(S) {
    re = [];
    var icount = 0,
        dcount = S.length;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == 'I') {
            re[i] = icount;
            icount++;
        } else {
            re[i] = dcount;
            dcount--;
        }
    }
    re.push(icount);
    return re;
};