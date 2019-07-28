var judgeCircle = function(moves) {
    var ucount = 0,
        dcount = 0,
        lcount = 0,
        rcount = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == 'U') {
            ucount++;
        } else if (moves[i] == 'D') {
            dcount++;
        } else if (moves[i] == 'L') {
            lcount++
        } else {
            rcount++
        }
    }
    if (ucount == dcount && lcount == rcount) {
        return true;
    } else {
        return false;
    }
};