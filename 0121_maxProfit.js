var maxProfit = function (prices) {
    var pro = [0];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if(prices[j] - prices[i]>pro[0]){
                pro[0]=prices[j] - prices[i]
            }
        }
    }
    return pro[0];
};