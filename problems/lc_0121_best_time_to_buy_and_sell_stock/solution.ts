function maxProfit(prices: number[]): number {
  let i = 0;
  let j = 1;
  let bestProfit = 0;
  while (j < prices.length) {
    if (prices[j] > prices[i]) {
      const profit = prices[j] - prices[i];
      bestProfit = Math.max(profit, bestProfit);
    }
    else {
      i = j;
    }
    j += 1;
  }
  return bestProfit;
}

function maxProfit2(prices: number[]): number {
  const maxArray = Array.from(Array(prices.length));
  maxArray[prices.length - 1] = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; i -= 1) {
    maxArray[i] = Math.max(prices[i + 1], maxArray[i + 1])
  }
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(profit, maxArray[i] - prices[i])
  }
  return profit;
}
