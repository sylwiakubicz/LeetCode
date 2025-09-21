class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int currentMin = prices[0];
        int profit;

        for (int i = 1; i < prices.length; i++) {
            profit = prices[i] - currentMin;

            if (profit > maxProfit) {
                maxProfit = profit;
            }

            if (prices[i] < currentMin) {
                currentMin = prices[i];
            }
        }
        return maxProfit;
    }
}
