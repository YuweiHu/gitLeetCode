var reverse = function (x) {
    var str = Math.abs(x).toString();
    var emp = '';
    // var nativeemp='-';
    var nat = '-';
    //第一層if else判斷是否可分析
    if (-Math.pow(2, 31) < x && x < Math.pow(2, 31) - 1) {
        //可分析分五種 正的 負的 只有一個數字的 只有一個數且是負的 結尾是0的 
        if (str.length == 1) {
            return x;
        } else if (str.length == 1 && str[0] == '-') {
            return x;
        } else if (x > 0) {
            //反轉
            for (let i = str.length - 1; i >= 0; i--) {
                emp = emp + str[i];
            }
            //反轉完成若開頭是0就去掉
            while (emp[0] == 0) {
                emp = emp.slice(1);
            }
            if (-Math.pow(2, 31) < parseInt(emp) && parseInt(emp) < Math.pow(2, 31) - 1) {
                return parseInt(emp);
            }
            else {
                return 0;
            }
        } else if (x < 0) {
            //反轉
            for (let i = str.length - 1; i >= 0; i--) {
                emp = emp + str[i];
            }
            //反轉完成若開頭是0就去掉
            while (emp[0] == 0) {
                emp = emp.slice(1);
            }
            if (-Math.pow(2, 31) < parseInt(nat.concat(emp)) && parseInt(nat.concat(emp)) < Math.pow(2, 31) - 1) {
                return parseInt(nat.concat(emp));
            }
            else {
                return 0;
            }
        }
    } else {
        return 0;
    }
};