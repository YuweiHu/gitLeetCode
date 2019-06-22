var hammingDistance = function (x, y) {

    //轉成二進位之string
    var x2 = x.toString(2);
    var y2 = y.toString(2);
    var count = 0;
    if (x2.length > y2.length) {
        while (x2.length !== y2.length) {
            y2 = '0' + y2;
        }
    } else if (x2.length < y2.length) {
        while (x2.length !== y2.length) {
            x2 = '0' + x2;
        }
    }
    //查看有幾個不一樣
    for(i=0;i<x2.length;i++){
        if(x2[i]!==y2[i]){
            count++;
        }
    }
    return count;
};