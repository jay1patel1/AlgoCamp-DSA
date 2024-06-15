const maxProfit = function(prices) {
    let maxProfit = Number.MIN_SAFE_INTEGER;
    let bestPrice = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < prices.length; i++) {
        bestPrice = Math.min(bestPrice, prices[i]);
        maxProfit = Math.max(maxProfit, (prices[i]-bestPrice));
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([1,2]))