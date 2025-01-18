
var maxProfit = function(prices) {
    let maxProfit = 0
    let currentMin = prices[0]

    for (let i = 1; i < prices.length; i++) {
        profit = prices[i] - currentMin

        if (profit > maxProfit) {
            maxProfit = profit
        }
        
        if (currentMin > prices[i]) {
            currentMin = prices[i]
        }
    }  

    return maxProfit
};
