var flipAndInvertImage = function (A) {
    //紀錄 map 使用方法
    //A.map 表示A陣列的每一項做括號裡的函式
    A.map((arr) => {
        arr.reverse();
        //item is a parameter that bulit in map function!
        //如果輸入參數並非『內建參數』,會自動導成陣列中的值！
        //map會根據輸入的參數順序給予定義
        //第一個是item：陣列中元素的值
        //第二個是index：第幾個元素
        //第三個是array：表示原陣列
        //以 A=[1,2,3,4,5]來說明
        //item依序為1,2,3,4,5
        //index依序為0,1,2,3,4
        //array則為[1,2,3,4,5]
        arr.map((item, index) => {
            arr[index] == 0 ? arr[index]=1 : arr[index]=0;
        })
    })
    return A
};