// działa ale wolne, brute force
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;
        int total = 0;
        int j;
        
        for (int i = 0; i < n; i++) {
            total = gas[i] - cost[i];
            if (total < 0 || gas[i] == 0) continue;
            j = (i + 1) % n;

            while (j != i) {
                total += gas[j];
                total -= cost[j];
                if (total < 0) {
                    break;
                }
                j = (j + 1) % n;
            }
            
            if (j == i) {
                return i;
            }
        }
        
        return -1;
    }
}
